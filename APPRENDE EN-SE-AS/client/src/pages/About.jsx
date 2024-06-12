import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function AboutUs() {
  const [showAvatars, setShowAvatars] = React.useState(false);

  React.useEffect(() => {
    setShowAvatars(true);
  }, []);

  const teamMembers = [
    { name: 'Emilio', src: '/src/assets/Emilio.png', bio: 'Full Stack Developer', link: '#' },
    { name: 'Fernando', src: '/src/assets/Fernando.png', bio: 'UI/UX Designer', link: '#' },
    { name: 'Carlos', src: '/src/assets/Carlos.png', bio: 'Backend Developer', link: '#' },
    { name: 'Bryan', src: '/src/assets/Bryan.png', bio: 'Project Manager', link: '#' },
    { name: 'Poncho', src: '/src/assets/Poncho.png', bio: 'Data Scientist', link: '#' },
  ];

  return (
    <div className="aboutUsContentBox">
      <h1>Equipo</h1>
      <Stack className="aboutUsAvatarsContainers" direction="row" spacing={25} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grow
            key={member.name}
            in={showAvatars}
            style={{ transformOrigin: '0 0 0' }}
            timeout={1000 + index * 400}
          >
            <Box textAlign="center" sx={{ marginRight: 2 }}>
              <Avatar alt={`Imagen de perfil ${member.name}`} src={member.src} sx={{ width: 250, height: 250, marginBottom: 1 }} />
              <Typography variant="h5" sx={{ color: '#1C1D21' }}>{member.name}</Typography>
              <Typography variant="body2" sx={{ color: '#1C1D21' }}>{member.bio}</Typography>
              <Link href={member.link} sx={{ color: '#1B998B' }}>More Info</Link>
            </Box>
          </Grow>
        ))}
      </Stack>
    </div>
  );
}

export default AboutUs;
