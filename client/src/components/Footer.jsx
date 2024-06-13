import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HttpIcon from '@mui/icons-material/Http';

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* Primera columna 'Nosotros' */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color='#1B998B' gutterBottom>
              Nosotros
            </Typography>
            <Typography variant="body2" color='#F8F1FF'>
              App-rende En-señas es una plataforma dedicada a enseñar en lenguaje de señas.
            </Typography>
          </Grid>
          {/* Segunda columna 'Links' */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color='#1B998B' gutterBottom>
              Links
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Link href="/" variant="body2" color='#F8F1FF' display="block">Inicio</Link>
                <Link href="/courses" variant="body2" color='#F8F1FF' display="block">Cursos</Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="/aboutUs" variant="body2" color='#F8F1FF' display="block">Nosotros</Link>
                {/* PENDIENTE DE AGREGAR CONTENIDO DE CONTACTO? */}
                <Link href="/contact" variant="body2" color='#F8F1FF' display="block">Contacto</Link>
              </Grid>
            </Grid>
          </Grid>
          {/* Tercera columna 'Siguenos' */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color='#1B998B' gutterBottom>
              Síguenos
            </Typography>
            <Box display="flex" justifyContent="center">
              <Link href="https://www.facebook.com/DeafTech.com.mx/" color="inherit" sx={{ marginRight: '0.5rem' }}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.youtube.com/@DeafTech" color="inherit" sx={{ marginRight: '0.5rem' }}>
                <YouTubeIcon/>
              </Link>
              <Link href="https://www.deaftech.com.mx/?fbclid=IwZXh0bgNhZW0CMTAAAR3MH2vVsK9-HhAjDJw8SZN2im1aypUvfEgK0EXsc1ndujtj-4lI_g0RUow_aem_ARqWsfvLfqqpDlRntAVPuOQrdAgzMq4wGqQTpmMLRVFqTrJkp2DTuufYycRDQUWb4Y85Kn9m6KC_AKmjldGinHqK" color="inherit" sx={{ marginRight: '0.5rem' }}>
                <HttpIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color='#1B998B' align="center">
            {'© '}
            {new Date().getFullYear()} {/*Escribe el año actual en el footer. */}
            {' App-rende En-señas. Todos los derechos reservados.'}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#1C1D21',
  color: '#F8F1FF',
  padding: theme.spacing(0, 0), 
  position: 'fixed',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
}));
