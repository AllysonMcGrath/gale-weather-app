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


import Home from './pages/Home';
import Dashboard from './pages/Dashboard;

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
          {/* <Navbar /> */}
          <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route render={() => <h1>Wrong page!</h1>} />
=======
            <SearchAppBar />
            <Route exact path='/' component={Home} />
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
>>>>>>> e8298a704eeb44afae3559b229e1ad757827db37
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
