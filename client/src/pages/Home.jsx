import React from "react";
import { Grid, Container } from "@mui/material";

function Home() {
  return (
    <Container>
      <main>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "300px", textAlign: "center" }}
        >
          <Grid item xs={12}>
            <h1>Bienvenido a App-rende En-señas</h1>
            <p>La primera plataforma de cursos en línea sobre LSM</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              ¡Nuestra serie de videos para aprender la Lengua de Señas Mexicana
              (LSM)!
            </h2>
            <p>
              La LSM es una lengua visual y gestual utilizada por la comunidad
              Sorda en México. A través de estos videos, realizados por miembros
              de la comunidad Sorda, te guiaremos paso a paso en el aprendizaje
              de esta hermosa y rica lengua. Nuestro objetivo es ayudarte a
              comunicarte de manera efectiva con personas Sordas y a fomentar
              una mayor inclusión y comprensión en nuestra sociedad.
            </p>
            <p>En esta serie, aprenderás:</p>
            <ul>
              <li>
                Saludos y Presentaciones: Cómo presentarte, saludar y
                despedirte.
              </li>
              <li>Colores: Las señas para los colores básicos.</li>
              <li>
                Números: Desde el 1 hasta el 100, y cómo combinarlos para formar
                otros números.
              </li>
              <li>Animales: Señas de diferentes animales.</li>
              <li>
                Frases Cotidianas: Expresiones y frases útiles para el día a
                día.
              </li>
            </ul>
            <p>
              Recuerda que la práctica constante es clave para dominar cualquier
              lengua, por lo que te recomendamos acercarte a la comunidad Sorda
              para aprender más.
            </p>
            <p>
              ¡Esperamos que disfrutes esta experiencia de aprendizaje y te
              sientas inspirado para seguir explorando y utilizando la LSM!
            </p>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}

export default Home;
