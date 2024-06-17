import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      console.error("GraphQL errors:", e.graphQLErrors);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  const handleCreateAccountClick = () => {
    navigate("/signup");
  };

  return (
    <OuterContainer>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        {/* {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}

        <form onSubmit={handleFormSubmit}>
          <StyledTextField
            label="Correo electrónico"
            name="email"
            type="email"
            value={formState.email}
            variant="outlined"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Contraseña"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Iniciar
            </StyledButton>
            <p id="aunNoCuenta">¿Aún no tienes cuenta?</p>
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
        {/* )}

                 {error && <ErrorMessage>{error.message}</ErrorMessage>} */}
      </StyledContainer>
    </OuterContainer>
  );
};

export default Login;

const OuterContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const StyledContainer = styled(Container)({
  backgroundColor: "#F8F1FF",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1B998B",
    },
    "&:hover fieldset": {
      borderColor: "#1B998B",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1B998B",
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#1B998B",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  fontSize: "16px", // Change the text size
  "&:hover": {
    backgroundColor: "#167f6a",
  },
});

// Boton para crear cuenta.
const StyledCreateAccountButton = styled(Button)({
  backgroundColor: "#1C1D21", // Change the color of the create account button
  color: "#F8F1FF",
  padding: "4px 8px",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  borderRadius: "20px", // Change the shape of the create account button
  fontSize: "15px",
  width: "50%",
  marginTop: "10px", // Espacio entre los botones
  "&:hover": {
    backgroundColor: "#2f3137", // Color secundario al hacer hoover.
  },
});

const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
});
