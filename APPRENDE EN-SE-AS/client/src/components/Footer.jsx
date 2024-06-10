import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LayersIcon from '@mui/icons-material/Layers';

const Footer = () => {
    return (
        <footer style={{textAlign: 'center', padding: '1rem', position: 'relative', bottom: 0, width: '100%' }}>
            <p>
                <a href='https://github.com/BryanGC96'><GitHubIcon sx={{ fontSize: 60}}></GitHubIcon></a>   | 
                <a href='https://stackoverflow.com/users/25260618/bryan-g-c'><LayersIcon sx={{ fontSize: 60}}></LayersIcon>  </a>
            </p>
        </footer>
    );
};

export default Footer;