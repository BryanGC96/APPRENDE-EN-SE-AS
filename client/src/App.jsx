import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import Auth from "./utils/auth";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app-container">
            <ResponsiveAppBar /> {/**Navbar */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses/:choice" element={<CourseList />} />
                <Route
                  path="/courses/:course/:id"
                  element={Auth.loggedIn() ? <CourseDetail /> : <Login />}
                />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
