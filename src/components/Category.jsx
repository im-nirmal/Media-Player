import React, { useEffect, useState } from 'react'
import { Modal, Button, Form   } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI'
import VideoCard from './VideoCard'

function Category({removeCategoryVideoResponse}) {

  //state for hold all categories
  const [allCategories,setAllCategories] = useState([])

  //state for hold the data in category text box
  const [categoryName,setCategoryName] = useState("")



  // to import modal 
  const [show, setShow] = useState(false);

  const handleClose = () =>{
     setShow(false);
     setCategoryName("")
  }
  const handleShow = () => setShow(true);

  const handleAddCategory = async()=>{
    if(categoryName){
      await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      //to load when we added a new category at the time of adding
      getAllCategories()
    }else{
      alert("Please fill the form completely")
    }
  }


  //to get all categories when page is loaded
  const getAllCategories = async()=>{
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }

  useEffect(()=>{
    getAllCategories()
  },[removeCategoryVideoResponse])

  // console.log(allCategories);


  //fn for deleting category
  const handleRemoveCategory = async(cId)=>{
    await removeCategoryAPI(cId)
    getAllCategories()
  }

  //to prevent reload
  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("dragging over category");
  }

  //video dropping
  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`Video dropped with vId: ${videoId}, inside category id: ${categoryId}`);
    // get detail of videoId
    const {data} = await getAVideoAPI(videoId)
    console.log(data);
    //get category details where we have add video
    let selectedCategory = allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //storing in json-server
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }

  const videoDragStarted = (e,videoId,categoryId)=>{
    // console.log(`drag started from category id: ${categoryId} with video id: ${videoId}`);
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }


  return (
    <>
    <div className="d-flex justify-content-around">
            <h3>All Categories</h3>
      <button onClick={handleShow}   className='btn bg-light ms-2 '><i className="fa-solid fa-plus"></i></button>
      </div>

      <div className="container-fluid mt-3">
        {/* this div needs to be repeated  */}


        { allCategories.length > 0? allCategories.map((item,index)=>(
          // dropping is done here; onDragOver used for preventing automatically reload by DOM
            <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-3 mb-2">
              <div className="d-flex justify-content-between">
                <h5>{item.categoryName}</h5>
                <button onClick={()=>handleRemoveCategory(item.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
              {/* to show all videos in each category */}
                <div className="row mt-2">
                  {
                    item.allVideos?.length>0 &&
                    item.allVideos?.map((video,index)=>(
                      // this div is duplicating; setting 3 arguments e, videoid, categoryid
                      <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                        <VideoCard insideCategory={true} displayData={video}/>
                      </div>
                    ))
                  }
                </div>
                
            </div>
        ))
           :
        <div className='text-danger fw-bolder'>No categories added yet</div>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
        <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category