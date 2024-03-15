import React from 'react';

const Footer = () => {
  return (
    <div className='site-footer'>
      <p className='text-center'>© 2024-present. All right reserved.</p>
      <p className='text-center'>Hardcrafted by Jaehyeon with Gatsby</p>
      <div className='footer-social-links'>
        <ul className='social-links-list'>
          <li><a href='/' target='_blank' rel='noopener noreferrer' className='github'>
            {/* <i classname="fa-brands fa-github fa-2x"></i> */}
          </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;