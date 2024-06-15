import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
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

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

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

  return (
    <Main>
      <Container>
        <Card>
          <CardHeader>Login</CardHeader>
          <CardBody>
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
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
            )}

            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </CardBody>
        </Card>
      </Container>
    </Main>
  );
};

export default Login;
