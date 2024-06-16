import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styled from "styled-components";
import emilio from "../assets/Emilio.png";
import fernando from "../assets/Fernando.png";
import carlos from "../assets/Carlos.png";
import bryan from "../assets/Bryan.png";
import poncho from "../assets/Poncho.png";

function AboutUs() {
  const [showAvatars, setShowAvatars] = useState(false);

  useEffect(() => {
    setShowAvatars(true);
  }, []);

  const teamMembers = [
    {
      name: "Emilio Frías",
      src: emilio,
      bio: "Front_end Developer",
      link: "https://github.com/EmilioColds",
    },
    {
      name: "Fernando Lage",
      src: fernando,
      bio: "Back_end Developer",
      link: "https://github.com/lage356",
    },
    {
      name: "Carlos Rodríguez",
      src: carlos,
      bio: "Back_end Developer",
      link: "https://github.com/carlos-roma",
    },
    {
      name: "Bryan Gómez",
      src: bryan,
      bio: "Front_end Developer",
      link: "https://github.com/BryanGC96",
    },
    {
      name: "Poncho Balderas",
      src: poncho,
      bio: "Innovation & Back_end Developer",
      link: "https://github.com/PonchoBT",
    },
  ];

  return (
    <AboutUsContainer className="contact">
      <AvatarContainer>
        {teamMembers.map((member, index) => (
          <Grow
            key={member.name}
            in={showAvatars}
            style={{ transformOrigin: "0 0 0" }}
            timeout={1000 + index * 400}
          >
            <Box textAlign="center" sx={{ margin: 2 }}>
              <Avatar
                alt={`Imagen de perfil ${member.name}`}
                src={member.src}
                sx={{ width: 250, height: 250, marginBottom: 1 }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#1C1D21", fontWeight: "600" }}
              >
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#1C1D21" }}>
                {member.bio}
              </Typography>
              <Link href={member.link} sx={{ color: "#1B998B" }}>
                GitHub Profile
              </Link>
            </Box>
          </Grow>
        ))}
      </AvatarContainer>
      <Description id="descriptionDelProyecto">
        {" "}
        Apprende EnSeñas es una plataforma dedicada a enseñar e lengua de
        señas.
      </Description>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background-color: #decdf5;
  width: 100%;
  padding: 20px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100% @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Description = styled.h4`
  margin-top: 20px;
  color: #1c1d21;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 0 20px;
  }
`;
