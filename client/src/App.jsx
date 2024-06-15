import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className='app-container'>
            <ResponsiveAppBar />
            <main className='content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
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
