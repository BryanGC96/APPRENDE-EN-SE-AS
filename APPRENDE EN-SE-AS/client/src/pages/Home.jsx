import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeContainer>
            <h1> Bienvenido a APPrende EnSeñas </h1>
            <p> La primera plataforma de cursos en línea sobre LSM </p>
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
text-align: center;

h1 {
    font-size: 40px;
    collor: #1C1D21;
}

p {
    font-size: 20px;
    color: #1C1D21;
}
`;