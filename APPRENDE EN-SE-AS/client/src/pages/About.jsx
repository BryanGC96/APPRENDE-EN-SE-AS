import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';

function AboutUs() {
  const [showAvatars, setShowAvatars] = useState(false);

  useEffect(() => {
    setShowAvatars(true); // Muestra 'showAvatars' una vez que la pagina ya este montada.
  }, []); // El array vacio es para asegurarce que el efecto solo pase 1 vez!.

  return (
    <div className='aboutUsContentBox'>
      <h1 id='tituloEquipo'>Equipo</h1>
      <Stack className='aboutUsAvatarsContainers' direction="row" spacing={2}>
        <Grow in={showAvatars} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
          <Avatar alt="Imagen de perfil Emilio" src="/src/assets/Emilio.png" sx={{ width: 250, height: 250, marginRight: 20 }} />
        </Grow>
        <Grow in={showAvatars} style={{ transformOrigin: '0 0 0' }} timeout={1400}>
          <Avatar alt="Imagen de perfil Fernando" src="/src/assets/Fernando.png" sx={{ width: 250, height: 250, marginRight: 20 }} />
        </Grow>
        <Grow in={showAvatars} style={{ transformOrigin: '0 0 0' }} timeout={1800}>
          <Avatar alt="Imagen de perfil Bryan" src="/src/assets/Bryan.png" sx={{ width: 250, height: 250, marginRight: 20 }} />
        </Grow>
        <Grow in={showAvatars} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
          <Avatar alt="Imagen de perfil Carlos" src="/src/assets/Carlos.png" sx={{ width: 250, height: 250, marginRight: 20 }} />
        </Grow>
        <Grow in={showAvatars} style={{ transformOrigin: '0 0 0' }} timeout={2200}>
          <Avatar alt="Imagen de perfil Poncho" src="/src/assets/Poncho.png" sx={{ width: 250, height: 250, marginRight: 20 }} />
        </Grow>
      </Stack>
    </div>
  );
}

export default AboutUs;
