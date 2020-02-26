import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Button,
  Typography,
} from '@material-ui/core';
 

import store from '../store'
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
  
  let [islogin,setIslogin] = useState('')
  let [u_name,setu_name] = useState('')
  
  
  
  store.subscribe(()=>{
    let storeState = store.getState()
    let {userInfo} = storeState 
    setIslogin(true)
    setu_name(userInfo.u_name)
  })
  
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
        {
          (islogin) ?
            u_name
            :
            (
            <>
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
            </>
            )
        }
      </Toolbar>
      <Nav />

    </React.Fragment>
  );
}

