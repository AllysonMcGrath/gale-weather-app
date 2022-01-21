import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import PreferenceToggle from '../components/PreferenceToggle';
import SearchBar from '../components/SearchBar';
// import SearchResults from './components/SearchResults';
import Weather from '../components/Weather';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import FormData from '../components/SignUp';
import { TextField } from '@mui/material';
import SavedWeather from '../components/SavedCards';
import WeatherCard from '../components/WeatherCards';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  grid2:{
    width: '100%',
    margin:'0px'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    background: theme.palette.info.dark
  },
  paper2: {
    padding: theme.spacing(1),
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.info.dark
  },
  paper3: {
    padding: theme.spacing(1),
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.info.dark
  }

}));

const Dashboard = (props) => {
  const classes = useStyles();
  const loggedIn = Auth.loggedIn();

  const { loading, data } = useQuery(GET_ME);

  const userData = data?.me || data?.user || {};
  console.log(Auth.loggedIn())
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return (
      <div>
        <h2>You need to be signed in!</h2>
        <Link to="/signin">
        Go to sign in
        </Link>
      </div>
    );
  }
console.log(userData);
console.log();
  return (
    
    <Grid container direction='row'spacing={3,2} justifyContent='center' className={classes.grid}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        Hello {GET_ME.name}! Have a look at the weather today!
        </Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>
          <SavedWeather>{}</SavedWeather>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}><SavedWeather>{}</SavedWeather></Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}><SavedWeather>{}</SavedWeather></Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}><SavedWeather>{}</SavedWeather></Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}><SavedWeather>{}</SavedWeather></Paper>
      </Grid>
      <Grid container spacing={4} className={classes.grid2}>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper2}><PreferenceToggle /></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Paper className={classes.paper2}><Weather/></Paper>
        </Grid>
        {/* <Grid item xs={12}>
        <Paper className={classes.paper3}></Paper>
        </Grid> */}
      </Grid>

    </Grid>
  )
    };
    


export default Dashboard;
