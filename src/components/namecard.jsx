import React from 'react';
import { useDarkMode } from '../context/theme-context';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Mcgraw from '../images/mcgraw.png';

const NameCard = () => {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <div className={`name-card-container ${darkMode ? 'dark' : ''}`}>
        <div className="spinner-box">
          <div className="circle-border">
          </div>
          <div className="circle-core" >
            {/* <img src='https://via.placeholder.com/140x140' alt='selfie'></img> */}
            <img src={Mcgraw} alt='selfie'></img>
          </div>
        </div>
        <div className='name-card-introduction'>
          <span><b>Jaehyeon </b><b style={{ color: '#3ea060' }}>Park</b></span>
          <span>
            I deliver useful <b>Frontend</b> and <b>UX</b> tips
            and maintain this blog as a reminder to myself.
          </span>
          <div className='name-card-icons'>
            <a href="https://github.com/JaehyeonPaak" target="_blank" rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
            <a href="/"><InstagramIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
            <a href="mailto:wogus392@gmail.com"><MailOutlineIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
          </div>
        </div>
      </div>
      <div className={`post-border ${darkMode ? 'dark' : ''}`} style={{ height: '1px', marginBottom: '30px' }}></div>
    </div>
  );
};

export default NameCard;