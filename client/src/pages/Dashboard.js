import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import PreferenceToggle from '../components/PreferenceToggle';
import Weather from '../components/Weather';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';


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
    color: theme.palette.text.secondary,
    background: theme.palette.primary.light
  },
  paper2: {
    padding: theme.spacing(1),
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.primary.light
  },
  paper3: {
    padding: theme.spacing(1),
    height: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.primary.light
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
  return (
    <Grid container direction='row'spacing={3,2} justifyContent='center' className={classes.grid}>
      <Grid item xs={12} md={6} >
        <Paper className={classes.paper}>
        Hello 'User'! Here is the Weather for 'City' this week!
        </Paper>
      </Grid>
      {/* <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}><PreferenceToggle/></Paper>
      </Grid> */}
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>Weathercard1</Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>Weathercard2</Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>Weathercard3</Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>Weathercard4</Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>Weathercard5</Paper>
      </Grid>
      <Grid container spacing={4} className={classes.grid2}>
        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper2}><PreferenceToggle /></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Paper className={classes.paper2}><h3>You need to be signed in!</h3>
                    <Link to="/signin">
                    Go to sign in
                </Link></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper3}><Weather/></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper3}>Search Result Placeholder</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper3}>Search Result Placeholder</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper3}>Search Result Placeholder</Paper>
        </Grid>
      </Grid>

    </Grid>
  )
    };
    


export default Dashboard;
