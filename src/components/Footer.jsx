import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100 '>
        <div className="footer-content d-flex justify-content-between">
            <div style={{width:'400px'}} className="media">
                <h5 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-music me-3"></i>Media Player</h5>
                <p>Designed and built with all the love in the world by the Bootstrap Team with the help of our contributors.</p>
                <p>Code Licensed MIT, docs CC by 3.0</p>
                <p>Currently v5.3.2.</p>
            </div>
            <div className="links d-flex flex-column">
                <h5>LINKS</h5>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
                <Link to={'/watch'} style={{textDecoration:'none', color:'white'}}>Watch History</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5>GUIDES</h5>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}>React</a>
                <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none', color:'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5>CONTACT US</h5>
                <div className="d-flex">
                    <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                    <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="icons d-flex justify-content-between mt-3">
                    <a href="https://twitter.com/?lang=en"><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built with React</p>

    </div>
  )
}

export default Footer