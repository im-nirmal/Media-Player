import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()
  // react-router-dom function to redirect to another page

  const handleNavigate = ()=>{
    //navigate to home page
    navigate('/home')
  }

  return (
    <>
      <div className='container '>
        <div className="header row align-items-center m-5">
            <div className='col-lg-5'>
              <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
              <p style={{textAlign:'justify'}}>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities.</p>
              <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
            </div>
            <div className="col"></div>
            <div className="col-lg-6">
              <img src="https://49.media.tumblr.com/d34bcb5eddcdb5d63ff1ad16474675a7/tumblr_nolvdbqZlF1sjwwzso1_500.gif" alt="Landing Image" />
            </div>
        </div>
        <div className="features">
          <h3 className="text-center mb-4">Features</h3>
          <div className="row">
            <div className="col-lg-4">
             <Card >
                <Card.Img variant="top" style={{height:'420px'}} src="https://i.pinimg.com/originals/03/2b/08/032b0870b9053a191b67dc8c3f340345.gif" />
                  <Card.Body>
                    <Card.Title>Managing Videos</Card.Title>
                      <Card.Text>
                         Users can manage upload or view and remove  the videos.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src="https://sketchandetch.com.au/cdn/shop/products/colorchanging_56a53d20-84de-453f-a97a-6bdc50423c66_1920x.gif?v=1660855539" />
                  <Card.Body>
                    <Card.Title>Categorize Videos</Card.Title>
                      <Card.Text>
                         User can categorize the videos according to their preference using drag and drop features .
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src="https://i.gifer.com/7lEz.gif" />
                  <Card.Body>
                    <Card.Title>Watch History</Card.Title>
                      <Card.Text>
                         User are abled to see the history of watched videos.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
            <div className="col-lg-5">
              <h3 className='text-warning'>Simple, fast and powerful</h3>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sapiente magnam impedit ut, asperiores, recusandae quam cum repellat ipsum deleniti saepe deserunt corrupti quidem et fuga! Molestiae repellat optio quae.</p>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Categorize Videos:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil obcaecati recusandae rerum incidunt accusantium voluptate a excepturi, atque blanditiis impedit veritatis minima! Ratione consectetur voluptates, praesentium veritatis maiores reiciendis?</p>
              <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at fuga molestiae. Voluptate tempore beatae recusandae expedita exercitationem et neque aut, soluta qui dignissimos officia quam laborum? Libero, corrupti voluptates.</p>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg-6">
            <iframe width="560" height="400" src="https://www.youtube.com/embed/mD0AkOxXhWY?si=wJN24q4fX5FmFtCX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage