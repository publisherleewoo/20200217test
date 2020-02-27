import React, { useState } from 'react';
import Copyright from '../common/CopyRight'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import store from '../store'
import {
    Avatar,
    Button,
    CssBaseline,
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
    let [u_id, setU_id] = useState('test');
    let [u_password, setU_password] = useState('1234');
    let history = useHistory()

    let AxiosFunc = () => {
        let reqData = {
            u_id,
            u_password
        }
        Axios.post('/users/login', reqData)
            .then(r => {
                console.log(r)
                console.log(document.cookie)
                // let { msg, code, userInfo } = r.data;
                // console.log(r.data)
                // alert(msg)
                // if (code === 1) {
                //     store.dispatch({ type: "login", payload: userInfo })

                //     // history.goBack()
                // }
            })
            .catch(err => { alert(err) })
    }

    let onSubmitFunc = (e) => {
        e.preventDefault()
        AxiosFunc()
    }
    let u_idChangeFunc = (e) => {
        setU_id(e.target.value)
    }

    let u_passwordChangeFunc = (e) => {
        setU_password(e.target.value)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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
                        value={u_id}
                        onChange={u_idChangeFunc}
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
                        value={u_password}
                        onChange={u_passwordChangeFunc}
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