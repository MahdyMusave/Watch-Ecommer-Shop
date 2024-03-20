import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='header-container wrap w-100'>
        <div className="row align-item-center m-0 d-none d-md-flex shadow">
          <div className="col-5 bg-dark text-center py-3">

            <ul className='header-inner-box d-flex list-unstyled justify-content-center m-0  ps-4' >
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link className='nav-link text-white'>Home</Link></li>
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link className='nav-link text-white'>About</Link></li>
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link className='nav-link text-white '>News</Link></li>
            </ul>
          </div>
          <div className='col-2 logo-here align-items-center text-white '>
            <h2 className='text-center align-items-center p-2 '>logo in here</h2>
          </div>
                 <div className="col-5 bg-dark text-center py-3">

            <ul className='header-inner-box d-flex list-unstyled justify-content-center m-0 ' >
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link className='nav-link text-white'>Telegram</Link></li>
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link  className='nav-link text-white'>Facebook</Link></li>
              <li className='nav-item ms-3 ps-2 fs-5 fw-300 fs-italic'><Link  className='nav-link text-white '>Instagram</Link></li>
      
            </ul>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Header