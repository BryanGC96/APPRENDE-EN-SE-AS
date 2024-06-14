import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HttpIcon from '@mui/icons-material/Http';

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          {/* Primera columna 'Nosotros' */}
          <Grid item xs={12} sm={4} style={{ textAlign: 'left' }}>
            <Typography variant="h6" color='#1B998B' gutterBottom style={{ marginBottom: '0px', fontSize: '0.95rem' }}>
              Nosotros
            </Typography>
            <Typography variant="body2" color='#F8F1FF' style={{ lineHeight: '1.5', fontSize: '0.75rem' }}>
              Apprende EnSeñas es una plataforma dedicada a enseñar en lenguaje de señas.
            </Typography>
          </Grid>
          {/* Segunda columna 'copyright' */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center">
              <Typography variant="body2" color='#1B998B' align="center" style={{ marginBottom: '0px' }}>
                {'© '}
                {new Date().getFullYear()} {/*Escribe el año actual en el footer. */}
                {' Apprende EnSeñas. Todos los derechos reservados.'}
              </Typography>
            </Box>
          </Grid>
          {/* Tercera columna 'Síguenos' */}
          <Grid item xs={12} sm={4} style={{ textAlign: 'right' }}>
            <Typography variant="h6" color='#1B998B' gutterBottom style={{ marginBottom: '0px', fontSize: '0.95rem' }}>
              Síguenos
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Link href="https://www.facebook.com/DeafTech.com.mx/" color="inherit" sx={{ marginRight: '0.5rem' }}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.youtube.com/@DeafTech" color="inherit" sx={{ marginRight: '0.5rem' }}>
                <YouTubeIcon />
              </Link>
              <Link href="https://www.deaftech.com.mx/?fbclid=IwZXh0bgNhZW0CMTAAAR3MH2vVsK9-HhAjDJw8SZN2im1aypUvfEgK0EXsc1ndujtj-4lI_g0RUow_aem_ARqWsfvLfqqpDlRntAVPuOQrdAgzMq4wGqQTpmMLRVFqTrJkp2DTuufYycRDQUWb4Y85Kn9m6KC_AKmjldGinHqK" color="inherit">
                <HttpIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
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
}));
