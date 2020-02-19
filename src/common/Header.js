import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Nav from './Nav'


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
 
   
}));

export default function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Button size="small">
            Logo
        </Button>
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          blog
        </Typography>
        <Link to="/signup">
          <Button variant="outlined" size="small">
            Sign up
        </Button>
        </Link>
        <Link to="/login">
          <Button variant="outlined" size="small">
            login
        </Button>
        </Link>
      </Toolbar>
      <Nav/>

    </React.Fragment>
  );
}

