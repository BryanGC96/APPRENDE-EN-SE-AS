import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";

function Home() {
  return (
    <Container>
      <main>
        <Grid container spacing={2} sx={{ mt: 10, textAlign: "center" }}>
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom>
              Bienvenido a App-rende En-señas
            </Typography>
            <Typography variant="h5">
              La primera plataforma de cursos en línea sobre LSM
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              gutterBottom
              textAlign="center"
              sx={{ mb: 4 }}
            >
              ¡Nuestra serie de videos para aprender la Lengua de Señas Mexicana
              (LSM)!
            </Typography>
            <Typography paragraph>
              La LSM es una lengua visual y gestual utilizada por la comunidad
              Sorda en México. A través de estos videos, realizados por miembros
              de la comunidad Sorda, te guiaremos paso a paso en el aprendizaje
              de esta hermosa y rica lengua. Nuestro objetivo es ayudarte a
              comunicarte de manera efectiva con personas Sordas y a fomentar
              una mayor inclusión y comprensión en nuestra sociedad.
            </Typography>
            <Typography paragraph>En esta serie, aprenderás:</Typography>
            <Box component="ul" sx={{ listStyleType: "disc", pl: 4 }}>
              <Typography component="li" variant="body1">
                Saludos y Presentaciones: Cómo presentarte, saludar y
                despedirte.
              </Typography>
              <Typography component="li" variant="body1">
                Colores: Las señas para los colores básicos.
              </Typography>
              <Typography component="li" variant="body1">
                Números: Desde el 1 hasta el 100, y cómo combinarlos para formar
                otros números.
              </Typography>
              <Typography component="li" variant="body1">
                Animales: Señas de diferentes animales.
              </Typography>
              <Typography component="li" variant="body1">
                Frases Cotidianas: Expresiones y frases útiles para el día a
                día.
              </Typography>
            </Box>
            <Typography paragraph>
              Recuerda que la práctica constante es clave para dominar cualquier
              lengua, por lo que te recomendamos acercarte a la comunidad Sorda
              para aprender más.
            </Typography>
            <Typography paragraph>
              ¡Esperamos que disfrutes esta experiencia de aprendizaje y te
              sientas inspirado para seguir explorando y utilizando la LSM!
            </Typography>
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}

export default Home;
