import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


function Watch() {

  const[history,setHistory]=useState([])

  //to invoke when this component is opening
  const getAllHistory = async()=>{
    const result = await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  // since we cant use async in useEffect we create seperate fn for async , and then call that fn in useEffect
  useEffect(()=>{
    getAllHistory()
  },[])


  //to delete history
  const deleteHistory = async (vId)=>{
    await removeHistoryAPI(vId)
    getAllHistory()
  }

  return (
    <div className='container mb-5 mt-5'>
        <div className="d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}> <i className='fa-solid fa-arrow-left'></i> Back to <i className='fa-solid fa-home'></i></Link>
        </div>
        <table className="table mt-5 mb-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Video Link</th>
              <th>Time Stamp</th>
              <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
            </tr>
          </thead>
          <tbody>
            { history?.length>0? history?.map((video,index)=>(
               <tr key={index}>
               <td>{index+1}</td>
               <td>{video?.caption}</td>
               <td><a href={video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
               <td>{video?.timeStamp}</td>
               <td><button onClick={()=>deleteHistory(video.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button ></td>
             </tr>
              ))  :
            <tr className='text-danger fw-bolder'>No videos watched yet!!!</tr>
            }
          </tbody>
        </table>
    </div>
    
  )
}

export default Watch