import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
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

import Axios from 'axios';

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
  const history = useHistory();
  
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

 
  let submitFunc = (e) => {
    e.preventDefault()
    if (!checkId) return alert("아이디 중복확인해주세요")
    if (!checkSubmit) return alert("체크해주세요")


    let reqData = {
      u_id,
      u_email,
      u_password,
      u_name: u_firstName + u_lastName,
      u_gender,
      u_birthday: u_birthdayY + u_birthdayM + u_birthdayD,
      u_phone: u_phone1 + u_phone2 + u_phone3,
    }
   
    Axios.post('/users/join', reqData)
      .then((r) => {
        alert(r.data.msg)
        if(r.data.code===1){
          history.push('/login')
        }
      })
      .catch(err=>{alert(err)})
  }

  let idCheck = () => {
    Axios.post("/users/idcheck", { u_id }).then(r => {
      let { data } = r;
      (data.code === 1) ? setCheckId(true) : setCheckId(false)
      alert(data.msg)
    })
    .catch(err=>{alert(err)})

  }

  const u_idChangeFunc = (event) => {
    setId(event.target.value);
  }
  const u_emailChangeFunc = (event) => {
    setEmail(event.target.value);
  }
  const u_passwordChangeFunc = (event) => {
    setPassword(event.target.value);
  }
  const u_firstNameChangeFunc = (event) => {
    setFirstName(event.target.value);
  }
  const u_lastNameChangeFunc = (event) => {
    setLastName(event.target.value);
  }
  const u_genderChangeFunc = (event) => {
    setGender(event.target.value);
  }
  const u_birthdayYChangeFunc = (event) => {
    setBirthdayY(event.target.value);
  }
  const u_birthdayMChangeFunc = (event) => {
    setBirthdayM(event.target.value);
  }
  const u_birthdayDChangeFunc = (event) => {
    setBirthdayD(event.target.value);
  }
  const u_phone1ChangeFunc = (event) => {
    setPhone1(event.target.value);
  }
  const u_phone2ChangeFunc = (event) => {
    setPhone2(event.target.value);
  }
  const u_phone3ChangeFunc = (event) => {
    setPhone3(event.target.value);
  }
  const u_checkChangeFunc = () => setCheckSubmit(!checkSubmit)


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
        <form className={classes.form}  onSubmit={submitFunc} >
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
                onChange={u_idChangeFunc}
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
                onChange={u_emailChangeFunc}
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
                onChange={u_passwordChangeFunc}
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
                onChange={u_firstNameChangeFunc}
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
                onChange={u_lastNameChangeFunc}
              />
            </Grid>
            <Grid item xs={12} >
      
              <FormControl  required  className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">gender</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={u_gender}
                  name="u_gender"
                  onChange={u_genderChangeFunc}
                >
                  <MenuItem value={'man'}>man</MenuItem>
                  <MenuItem value={'woman'}>woman</MenuItem>
                </Select>
                <FormHelperText>select gender</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={u_birthdayY}
                  name="u_birthdayY"
                  onChange={u_birthdayYChangeFunc}
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
              <FormControl required className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={u_birthdayM}
                  name="u_birthdayM"
                  onChange={u_birthdayMChangeFunc}
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
              <FormControl  required className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">birthday</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //선택
                  value={u_birthdayD}
                  name="u_birthdayD"
                  onChange={u_birthdayDChangeFunc}
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
                onChange={u_phone1ChangeFunc}
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
                onChange={u_phone2ChangeFunc}
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
                onChange={u_phone3ChangeFunc}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" onChange={u_checkChangeFunc} />}
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