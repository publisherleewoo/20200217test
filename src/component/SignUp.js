import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Copyright from '../common/CopyRight'
import axios from 'axios';

// import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default () => {

  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [birthdayY, setBirthdayY] = useState('');
  const [birthdayM, setBirthdayM] = useState('');
  const [birthdayD, setBirthdayD] = useState('');

  let submitFunc = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let { u_id, u_email, u_password, u_firstName, u_lastName, u_gender, u_birthdayY, u_birthdayM, u_birthdayD, u_phone1, u_phone2, u_phone3 } = e.target;

    u_id = u_id.value
    u_email = u_email.value
    u_password = u_password.value
    u_gender = u_gender.value
    let u_name = u_firstName.value + u_lastName.value;
    let u_birthday = parseInt(u_birthdayY.value + u_birthdayM.value + u_birthdayD.value);
    let u_phone = u_phone1.value + u_phone2.value + u_phone3.value

    axios.post('/users/join', {
      u_id,
      u_email,
      u_password,
      u_name,
      u_gender,
      u_birthday,
      u_phone
    }
    ).then((r) => {
      console.log(r)
    }).catch(e => console.log(e))





  }

  const genderChangeFunc = event => {
    setGender(event.target.value);
  };
  const birthdayYChangeFunc = event => {
    setBirthdayY(event.target.value);
  };
  const birthdayMChangeFunc = event => {
    setBirthdayM(event.target.value);
  };
  const birthdayDChangeFunc = event => {
    setBirthdayD(event.target.value);
  };

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
          </Typography>
        <form className={classes.form} noValidate onSubmit={submitFunc}   >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="id"
                name="u_id"
                autoComplete="id"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="u_email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="u_password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="u_firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="u_lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} >
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">gender</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={gender}
                  name="u_gender"
                  onChange={genderChangeFunc}
                >

                  <MenuItem value={'man'}>man</MenuItem>
                  <MenuItem value={'woman'}>woman</MenuItem>
                </Select>
                <FormHelperText>select gender</FormHelperText>
              </FormControl>
            </Grid>

            {/* birthday,phone */}
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={birthdayY}
                  name="u_birthdayY"
                  onChange={birthdayYChangeFunc}
                >
                  {
                    (() => {
                      let nowYear = new Date().getFullYear();
                      const years = Array.from(new Array(140), (val, index) => nowYear - index)
                      return years.map((year, i) => {
                        return <MenuItem value={year} key={year}>{year}</MenuItem>
                      })
                    })()
                  }
                </Select>
                <FormHelperText>Birthday Year</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={birthdayM}
                  name="u_birthdayM"
                  onChange={birthdayMChangeFunc}
                >
                  {
                    (() => {
                      let months = Array.from(new Array(12), (val, index) => {
                        if (12 - index < 10) {
                          return 0 + (12 - index).toString()
                        }
                        return (12 - index).toString()
                      })
                      return months.map((month, i) => {
                        return <MenuItem value={month} key={month}>{month}</MenuItem>
                      })
                    })()
                  }
                </Select>
                <FormHelperText>Birthday Month</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={birthdayD}
                  name="u_birthdayD"
                  onChange={birthdayDChangeFunc}
                >
                  {
                    (() => {
                      const days = Array.from(new Array(31), (val, index) => 31 - index)
                      return days.map((day, i) => {
                        return <MenuItem value={day} key={day}>{day}</MenuItem>
                      })
                    })()
                  }
                </Select>
                <FormHelperText style={{ "paddingRight": "10px" }}>Birthday Day</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="phone1"
                label="Phone"
                name="u_phone1"
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="phone2"
                label="Phone"
                name="u_phone2"

              />
            </Grid><Grid item xs={4}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="phone3"
                label="Phone"
                name="u_phone3"

              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2" style={{ 'textDecoration': 'underline' }}>
                Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} mb={10}>
        <Copyright />
      </Box>
    </Container>
  );

}