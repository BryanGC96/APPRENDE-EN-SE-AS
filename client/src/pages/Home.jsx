import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <h1> Bienvenido a App-rende En-señas </h1>
      <p> La primera plataforma de cursos en línea sobre LSM </p>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  padding: 15% 2%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   height: 100vh;
  text-align: center;
  background-color: #decdf5;
  //   height: 100%;
  //   padding: 20px;

  h1 {
    font-size: 40px;
    color: #1c1d21;
  }

  p {
    margin: 20px;
    font-size: 20px;
    color: #1c1d21;
  }
`;
