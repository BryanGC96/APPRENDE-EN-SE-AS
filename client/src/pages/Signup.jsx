import { useState } from "react";
// import { Container, TextField, Button, Box, Typography } from "@mui/material";
import styled from "styled-components";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 15% 2%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.h3`
  background: #343a40;
  color: #fff;
  padding: 1rem 2rem;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #17a2b8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #138496;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #dc3545;
  color: white;
  border-radius: 4px;
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
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
  const handleSubmit = async (event) => {
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
    // <OuterContainer>
    //   <StyledContainer>
    //     <Typography variant="h4" gutterBottom>
    //       Crear cuenta
    //     </Typography>
    //     <form onSubmit={handleSubmit}>
    //       <StyledTextField
    //         label="Nombre de usuario"
    //         type="Username"
    //         variant="outlined"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         fullWidth
    //         margin="normal"
    //       />
    //       <StyledTextField
    //         label="Correo electrónico"
    //         type="Email"
    //         variant="outlined"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         fullWidth
    //         margin="normal"
    //       />
    //       <StyledTextField
    //         label="Contraseña"
    //         type="Password"
    //         variant="outlined"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         fullWidth
    //         margin="normal"
    //       />
    //       <StyledTextField
    //         label="Confirmar contraseña"
    //         type="password"
    //         variant="outlined"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //         fullWidth
    //         margin="normal"
    //       />
    //       <Box mt={2}>
    //         <StyledButton
    //           type="submit"
    //           variant="contained"
    //           color="primary"
    //           fullWidth
    //         >
    //           Crear cuenta
    //         </StyledButton>
    //       </Box>
    //     </form>
    //   </StyledContainer>
    // </OuterContainer>

    <Main>
      <Container>
        <Card>
          <CardHeader>Crear Cuenta</CardHeader>
          <CardBody>
            {/* {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
            <Form onSubmit={handleSubmit}>
              <h3>Username:</h3>
              <Input
                placeholder="Your Username"
                name="username"
                type="username"
                value={formState.username}
                onChange={handleChange}
              />
              <h3>Email:</h3>
              <Input
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <h3>Password:</h3>
              <Input
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />

              <Button type="submit">Submit</Button>
            </Form>
            {/* )} */}

            {/* {error && <ErrorMessage>{error.message}</ErrorMessage>} */}
          </CardBody>
        </Card>
      </Container>
    </Main>
  );
};

export default Signup;

// const OuterContainer = styled(Container)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "15% 2%",
//   // height: "100vh",
//   // width: "100%",
// });

// const StyledContainer = styled(Container)({
//   backgroundColor: "#F8F1FF",
//   padding: "2rem",
//   borderRadius: "8px",
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// });

// const StyledTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#1B998B",
//     },
//     "&:hover fieldset": {
//       borderColor: "#1B998B",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#1B998B",
//     },
//   },
// });

// const StyledButton = styled(Button)({
//   backgroundColor: "#1B998B",
//   "&:hover": {
//     backgroundColor: "#1B998B",
//   },
// });
