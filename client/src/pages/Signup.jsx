import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      // Assuming Auth is imported and used correctly here
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (

    <OuterContainer>
      
      <StyledContainer>
   
        <Typography variant="h4" gutterBottom>
          Crear cuenta
        </Typography>

        {data ? (
              <p>
                Curso!!{' '}
                <Link to="/courses">Curso.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          <StyledTextField
            label="Nombre de usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          />
          <StyledTextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <StyledTextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          {/* <StyledTextField
            label="Confirmar contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          /> */}
          <Box mt={2}>
            <StyledButton type="submit" variant="contained" color="primary" fullWidth>
              Crear cuenta
            </StyledButton>
          </Box>
        </form>
    )}

    {error && (
      <div className="my-3 p-3 bg-danger text-white">
        {error.message}
      </div>
    )}

      </StyledContainer>
        
    </OuterContainer>
  );
};

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

export default Signup;
