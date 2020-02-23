import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../common/CopyRight'
import { Link } from 'react-router-dom'
import axios from 'axios'


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
    let [u_id, setU_id] = useState('');
    let [u_password, setU_password] = useState('');


    let axiosFunc = ()=>{
        let reqData = {
            u_id,
            u_password
        }
        axios.post('/users/login',reqData)
        .then(r=>{
            alert(r.data.msg)
            if(r.data.code===1){
               console.log(r.data)
               // 리듀서로 유저 정보 넘기고 히스토리푸시
            }

        })
        .catch(err=>{alert(err)})
    }

    let onSubmitFunc = (e) => {
        e.preventDefault()
        axiosFunc()
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