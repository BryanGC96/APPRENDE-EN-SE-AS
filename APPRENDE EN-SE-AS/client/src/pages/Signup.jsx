import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Signup = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Wrong password! Try again.');
            return;
        }

        try {
            const response = await fetch('https://your-backend-api.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application /json',
                }, body: JSON.stringify({
                    username,
                    email,
                    password,
                  }),
              });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Signup successful! Please log in.');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
    };

    return ( 
        <OuterContainer>
        <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Crear cuenta
      </Typography>
      <form onSubmit={handleSubmit}>
      <StyledTextField
          label="Nombre de usuario"
          type="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <StyledTextField
          label="Correo electrónico"
          type="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <StyledTextField
          label="Contraseña"
          type="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <StyledTextField
          label="Confirmar contraseña"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box mt={2}>
          <StyledButton type="submit" variant="contained" color="primary" fullWidth>
            Crear cuenta
          </StyledButton>
        </Box>
      </form>
    </StyledContainer>
    </OuterContainer>
  );
};

export default Signup;

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
    '&:hover': {
      backgroundColor: '#1B998B',
    },
  });