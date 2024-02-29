import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

//in react-bootstrap instead of grid we use row and col
//statelifting from home.jsx
function View({uploadVideoResponse, setRemoveCategoryVideoResponse}) {
  // to store whole videos in the state
  const [allVideos,setAllVideos] = useState([])

  //statelifting from videocard to hold deleteresponse
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")



  //using hook useEffect for the api call when there is loading in the page , useEffect apply only when the component creates so we give empty dependency
  //since it gives promise as return we create seperate fn for async for the useEffect hook

  const getAllVideos = async ()=>{
    const result = await getAllVideosAPI()
    // console.log(result);
    if(result?.status==200){
      setAllVideos(result?.data);
    }
    
  }

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])

  // console.log(allVideos);


  //drop fn
  const dragOverView = (e)=>{
    e.preventDefault()
  }
  const handleCategoryVideo = async (e)=>{
    const {videoId,categoryId} =JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove video id: ${videoId} from category id: ${categoryId}`);
    //get a single category
    const {data} = await getSingleCategoryAPI(categoryId)
    // console.log(data);

    // to remove the video from category
    const updatedVideoList = data.allVideos.filter(item=>item.id!=videoId)
    console.log(updatedVideoList);
    const {id,categoryName} = data
    const result = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedVideoList})
    setRemoveCategoryVideoResponse(result.data)

  }



  return (
    <>
    {/* to drag video from category to view */}
      <Row droppable= "true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        {/* col is need to be duplicated here  */}
        
        { allVideos?.length>0? allVideos?.map((video,index)=>(
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
          <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        ))
          :
        <div className='text-danger fw-bolder'>No videos are uploaded yet!!!</div>
        }
      </Row>
    </>
  )
}

export default View