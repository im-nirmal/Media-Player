import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'


import { Link } from 'react-router-dom'

function Home() {

  //state to remove categoryvideo
  const [removeCategoryVideoResponse, setRemoveCategoryVideoResponse]= useState("")

  //state to make change when there is change for view then add also need to be changed; state lifting
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")

  return (
    <>
      {/* to show in same line  */}
      <div className="container d-flex justify-content-between mt-5">

        {/* updated state to be stored here  */}
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/watch'}>View History</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row">
        {/* to display under the heading */}
        <div className="col-lg-6">
          <h3>All Videos</h3>

          {/* state to be stored here  */}
          <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>
        <div className="col-lg-6">
          {/* to display in one line  */}
          
            <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
      
    
    </>
  )
}

export default Home