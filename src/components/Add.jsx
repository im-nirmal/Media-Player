import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { uploadVideoAPI } from "../services/allAPI";

//destructuring the props
function Add({setUploadVideoResponse}) {
  //state for uploading video; instead of using 3 states we here create single state with 3 objects
  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //when clicking cancel button input values should be cleared; if this fn need to work the input attribute value should be given
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);


  console.log(uploadVideo);

  //we need to embed the link which the user gives the yt link
  const getYoutubeEmbedLink = (link)=>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      setUploadVideo({...uploadVideo,youtubeLink:""})
      alert("Input proper youtube link!!!")
    }
  }


  const handleUpload = async () =>{
    //store upload video in http://localhost:3000/videos
    //destructuring state values which is in object
    const {caption,imageURL,youtubeLink} = uploadVideo
    if(caption && imageURL && youtubeLink){
      //proceed to store video from http://localhost:5173/home to http://localhost:3000/videos ; in jS different applications communicate with api
      // alert("Proceed to store video")
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status >=200 && result.status<300){
        alert(`Video '${result.data.caption}' uploaded successfully!!!`)
        //to update in All Videos        
        setUploadVideoResponse(result.data)
        handleClose()
      }else{
        alert("API Call failed... Please try again!!!")
      }
    }else{
      alert("Please fill the form completely")
    }
  }



  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn bg-light ms-2 ">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {/* code for modal from react-bootstrap  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              {/* event change is binding here, in setUploadVideo the argument is object and we need the value as target; also using spread operator to make changes to other text box when we eidt one  */}
              {/* making value as like this to make it as a controlled component  */}
              <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImg"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image URL" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;


//  https://www.youtube.com/watch?v=OGwyhjk_fhE

