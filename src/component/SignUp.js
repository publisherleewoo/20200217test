import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Copyright from '../common/CopyRight'

import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from '@material-ui/core';

import axios from 'axios';

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

  const [u_idErr, setU_idErr] = useState(false)
  const [u_emailErr, setU_emailErr] = useState(false)
  const [u_passwordErr, setU_passwordErr] = useState(false)
  const [u_firstNameErr, setU_firstNameErr] = useState(false)
  const [u_lastNameErr, setU_lastNameErr] = useState(false)
  const [u_genderErr, setU_genderErr] = useState(false)
  const [u_birthdayYErr, setU_birthdayYErr] = useState(false)
  const [u_birthdayMErr, setU_birthdayMErr] = useState(false)
  const [u_birthdayDErr, setU_birthdayDErr] = useState(false)
  const [u_phone1Err, setU_phone1Err] = useState(false)
  const [u_phone2Err, setU_phone2Err] = useState(false)
  const [u_phone3Err, setU_phone3Err] = useState(false)


  const [checkId, setCheckId] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)
  const [u_id, setId] = useState('');
  const [u_email, setEmail] = useState('');
  const [u_password, setPassword] = useState('');
  const [u_firstName, setFirstName] = useState('');
  const [u_lastName, setLastName] = useState('');
  const [u_gender, setGender] = useState('');
  const [u_birthdayY, setBirthdayY] = useState(new Date().getFullYear());
  const [u_birthdayM, setBirthdayM] = useState('01');
  const [u_birthdayD, setBirthdayD] = useState(1);
  const [u_phone1, setPhone1] = useState('');
  const [u_phone2, setPhone2] = useState('');
  const [u_phone3, setPhone3] = useState('');


  let u_idCheck = arg => (!arg)?  setU_idErr(true): setU_idErr(false) 
  let u_emailCheck = arg => (!arg)?  setU_emailErr(true): setU_emailErr(false) 
  let u_passwordCheck = arg => (!arg)?  setU_passwordErr(true): setU_passwordErr(false) 
  let u_firstNameCheck = arg => (!arg)?  setU_firstNameErr(true): setU_firstNameErr(false) 
  let u_lastNameCheck = arg => (!arg)?  setU_lastNameErr(true): setU_lastNameErr(false) 
  let u_genderCheck = arg => (!arg)?  setU_genderErr(true): setU_genderErr(false) 
  let u_birthdayYCheck = arg => (!arg)?  setU_birthdayYErr(true): setU_birthdayYErr(false) 
  let u_birthdayMCheck = arg => (!arg)?  setU_birthdayMErr(true): setU_birthdayMErr(false) 
  let u_birthdayDCheck = arg => (!arg)?  setU_birthdayDErr(true): setU_birthdayDErr(false) 
  let u_phone1Check = arg => (!arg)?  setU_phone1Err(true): setU_phone1Err(false) 
  let u_phone2Check = arg => (!arg)?  setU_phone2Err(true): setU_phone2Err(false) 
  let u_phone3Check = arg => (!arg)?  setU_phone3Err(true): setU_phone3Err(false) 
  
  let allValidatorCheck = () => {
    u_idCheck(u_id)
    u_emailCheck(u_email)
    u_passwordCheck(u_password)
    u_firstNameCheck(u_firstName)
    u_lastNameCheck(u_lastName)
    u_genderCheck(u_gender)
    u_birthdayYCheck(u_birthdayY)
    u_birthdayMCheck(u_birthdayM)
    u_birthdayDCheck(u_birthdayD)
    u_phone1Check(u_phone1)
    u_phone2Check(u_phone2)
    u_phone3Check(u_phone3)
  }

  let submitFunc = (e) => {
    e.preventDefault()
    if (!checkId) return alert("아이디 중복확인해주세요")
    if (!checkSubmit) return alert("체크해주세요")

    allValidatorCheck()

    let reqData = {
      u_id,
      u_email,
      u_password,
      u_name: u_firstName + u_lastName,
      u_gender,
      u_birthday: u_birthdayY + u_birthdayM + u_birthdayD,
      u_phone: u_phone1 + u_phone2 + u_phone3,
    }

    axios.post('/users/join', reqData)
      .then((r) => {
        console.log(r)
      }).catch(e => console.log(e))
  }

  let idCheck = () => {
    axios.post("/users/idcheck", { u_id }).then(r => {
      let { data } = r;
      (data.code === 1) ? setCheckId(true) : setCheckId(false)
      alert(data.msg)
    }).catch(err => console.log(err))

  }

  const idChangeFunc = (event) => {
    setId(event.target.value);
    u_idCheck(event.target.value)
  }
  const emailChangeFunc = (event) => {
    setEmail(event.target.value);
    u_emailCheck(event.target.value)
  }
  const passwordChangeFunc = (event) => {
    setPassword(event.target.value);
    u_passwordCheck(event.target.value)
  }
  const firstNameChangeFunc = (event) => {
    setFirstName(event.target.value);
    u_firstNameCheck(event.target.value)
  }
  const lastNameChangeFunc = (event) => {
    setLastName(event.target.value);
    u_lastNameCheck(event.target.value)
  }
  const genderChangeFunc = (event) => {
    setGender(event.target.value);
    u_genderCheck(event.target.value)
  }
  const birthdayYChangeFunc = (event) => {
    setBirthdayY(event.target.value);
    u_birthdayYCheck(event.target.value)
  }
  const birthdayMChangeFunc = (event) => {
    setBirthdayM(event.target.value);
    u_birthdayMCheck(event.target.value)
  }
  const birthdayDChangeFunc = (event) => {
    setBirthdayD(event.target.value);
    u_birthdayDCheck(event.target.value)
  }
  const phone1ChangeFunc = (event) => {
    setPhone1(event.target.value);
    u_phone1Check(event.target.value)
  }
  const phone2ChangeFunc = (event) => {
    setPhone2(event.target.value);
    u_phone2Check(event.target.value)
  }
  const phone3ChangeFunc = (event) => {
    setPhone3(event.target.value);
    u_phone3Check(event.target.value)
  }
  const checkChangeFunc = () => setCheckSubmit(!checkSubmit)


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
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="id"
                name="u_id"
                value={u_id}
                autoComplete="id"
                autoFocus
                onChange={idChangeFunc}
                error={u_idErr}
              />
              <Button variant="contained"
                color="primary" onClick={idCheck}>중복확인</Button>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="u_email"
                value={u_email}
                autoComplete="email"
                onChange={emailChangeFunc}
                error={u_emailErr}
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
                value={u_password}
                autoComplete="current-password"
                onChange={passwordChangeFunc}
                error={u_passwordErr}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="u_firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={u_firstName}
                autoComplete="fname"
                onChange={firstNameChangeFunc}
                error={u_firstNameErr}
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
                value={u_lastName}
                autoComplete="lname"
                onChange={lastNameChangeFunc}
                error={u_lastNameErr}
              />
            </Grid>
            <Grid item xs={12} >
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">gender</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={u_gender}
                  name="u_gender"
                  onChange={genderChangeFunc}
                  error={u_genderErr}
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
                  value={u_birthdayY}
                  name="u_birthdayY"
                  onChange={birthdayYChangeFunc}
                  error={u_birthdayYErr}
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
                  value={u_birthdayM}
                  name="u_birthdayM"
                  onChange={birthdayMChangeFunc}
                  error={u_birthdayMErr}
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
                  value={u_birthdayD}
                  name="u_birthdayD"
                  onChange={birthdayDChangeFunc}
                  error={u_birthdayDErr}
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
                value={u_phone1}
                onChange={phone1ChangeFunc}
                error={u_phone1Err}
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
                value={u_phone2}
                onChange={phone2ChangeFunc}
                error={u_phone2Err}
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
                value={u_phone3}
                onChange={phone3ChangeFunc}
                error={u_phone3Err}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" onChange={checkChangeFunc} />}
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
            onClick={submitFunc}
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