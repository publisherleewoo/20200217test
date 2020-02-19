import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import router from '../router'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarSecondary: {
      // justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));

const Nav = () => {
    const classes = useStyles();
    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {router.map(section => (
                <Link
                    key={section.title}
                    to={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    );
};

export default Nav;