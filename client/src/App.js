import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import SearchAppBar from './components/SearchAppBar';
import Weather from './components/Weather';



import Dashboard from './pages/Dashboard';
import WeatherCard from "./components/WeatherCards";
// import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
      <Router>
        <>
          <Switch>
            <SearchAppBar />
            <Weather />
            {/* <Route exact path='/Display' component={Display} /> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/signin' component={SignIn} />
            <Route render={() => <h1>Wrong page!</h1>} />
            {/* <NavBar /> */}
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App; 
