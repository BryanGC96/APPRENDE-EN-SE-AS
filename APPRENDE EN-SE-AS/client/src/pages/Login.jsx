import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box mt={2}>
          <StyledButton type="submit" variant="contained" color="primary" fullWidth>
            Login
          </StyledButton>
        </Box>
      </form>
    </StyledContainer>
  );
};

export default Login;

const StyledContainer = styled(Container)({
  backgroundColor: '#DECDF5',
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
