import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from 'styled-components';

function AboutUs() {
  const [showAvatars, setShowAvatars] = React.useState(false);

  React.useEffect(() => {
    setShowAvatars(true);
  }, []);

  const teamMembers = [
    { name: 'Emilio', src: '/src/assets/Emilio.png', bio: 'Front_end Developer', link: '#' },
    { name: 'Fernando', src: '/src/assets/Fernando.png', bio: 'Back_end Developer', link: '#' },
    { name: 'Carlos', src: '/src/assets/Carlos.png', bio: 'Back_end Developer', link: '#' },
    { name: 'Bryan', src: '/src/assets/Bryan.png', bio: 'Front_end Developer', link: '#' },
    { name: 'Poncho', src: '/src/assets/Poncho.png', bio: 'Innovation & Back_end Developer', link: '#' },
  ];

  return (
    <AboutUsContainer>
      <Stack className="aboutUsAvatarsContainers" direction="row" spacing={25} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grow
            key={member.name}
            in={showAvatars}
            style={{ transformOrigin: '0 0 0' }}
            timeout={1000 + index * 400}
          >
            <Box textAlign="center" sx={{ marginRight: 2 }}>
              <Avatar alt={`Imagen de perfil ${member.name}`} src={member.src} sx={{ width: 150, height: 150, marginBottom: 1 }} />
              <Typography variant="h4" sx={{ color: '#1C1D21', fontWeight: '600' }}>{member.name}</Typography>
              <Typography variant="body2" sx={{ color: '#1C1D21' }}>{member.bio}</Typography>
              <Link href={member.link} sx={{ color: '#1B998B' }}>GitHub Profile</Link>
            </Box>
          </Grow>
        ))}
      </Stack>
      <h4 id='descriptionDelProyecto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam quae, doloremque eos voluptates nihil voluptatibus rerum sequi quia, vel, laudantium iure tenetur labore quis quos non magni esse obcaecati?</h4>
      </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  background-color: #DECDF5;
  width: 100%;
  padding: 20px;

  #descriptionDelProyecto {
    margin-top: 20px;
    color: #1C1D21;
  }
`;