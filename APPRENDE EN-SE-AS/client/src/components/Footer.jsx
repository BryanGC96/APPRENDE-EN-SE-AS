import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LayersIcon from '@mui/icons-material/Layers';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '.1%',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#1C1D21',
      color: '#F8F1FF',
    }}>
      <p>
        <a href='https://github.com/BryanGC96'>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a> | 
        <a href='https://stackoverflow.com/users/25260618/bryan-g-c'>
          <LayersIcon sx={{ fontSize: 40 }} />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
