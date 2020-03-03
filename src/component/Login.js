import React, { useState } from 'react';
import Copyright from '../common/CopyRight'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import store from '../store'
import {
    Avatar,
    Button,
    TextField,
    Grid,
    Box,
    Typography,
    Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    const classes = useStyles();
    let [uid, setUid] = useState('test');
    let [upassword, setUpassword] = useState('1234');
    let history = useHistory()

    let AxiosFunc = () => {
        let reqData = {
            uid,
            upassword
        }
        Axios.post('/users/login', reqData,{withCredentials:true})
            .then(r => {
                let { msg, code, userInfo } = r.data;
                console.log(r.data)
                alert(msg)
                if (code === 1) {
                    store.dispatch({ type: "login", payload: userInfo })
                    history.push('/')
                }
            })
            .catch(err => { alert(err) })
    }

    let onSubmitFunc = (e) => {
        e.preventDefault()
        AxiosFunc()
    }
    let uidChangeFunc = (e) => {
        setUid(e.target.value)
    }

    let upasswordChangeFunc = (e) => {
        setUpassword(e.target.value)
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmitFunc}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="id"
                        name="id"
                        autoComplete="id"
                        autoFocus
                        value={uid}
                        onChange={uidChangeFunc}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={upassword}
                        onChange={upasswordChangeFunc}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                     </Button>
                    <Grid container>
                        {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
                        <Grid item>
                            <Link to="/signup">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}