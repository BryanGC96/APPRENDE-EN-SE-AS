import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleCreateAccountClick = () => {
    navigate('/signup');
  };

  return (
    <OuterContainer>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Nombre de usuario"
            type="username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Correo electrónico"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Contraseña"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Iniciar
            </StyledButton>
            <p id='aunNoCuenta'>¿Aún no tienes cuenta?</p>
            <ButtonContainer>
              <StyledCreateAccountButton 
              id="createAccountBttn" 
              variant="contained" 
              color="primary"
              onClick={handleCreateAccountClick}
              >
                Crear Cuenta
              </StyledCreateAccountButton>
            </ButtonContainer>
          </Box>
        </form>
      </StyledContainer>
    </OuterContainer>
  );
};

export default Login;

const OuterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledContainer = styled(Container)({
  backgroundColor: '#F8F1FF',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1B998B',
    },
    '&:hover fieldset': {
      borderColor: '#1B998B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1B998B',
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#1B998B',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  fontSize: '16px', // Change the text size
  '&:hover': {
    backgroundColor: '#167f6a',
  },
});

// Boton para crear cuenta.
const StyledCreateAccountButton = styled(Button)({
  backgroundColor: '#1C1D21', // Change the color of the create account button
  color: '#F8F1FF',
  padding: '4px 8px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  borderRadius: '20px', // Change the shape of the create account button
  fontSize: '15px', 
  width: '50%',
  marginTop: '10px', // Espacio entre los botones
  '&:hover': {
    backgroundColor: '#2f3137', // Color secundario al hacer hoover.
  },
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});