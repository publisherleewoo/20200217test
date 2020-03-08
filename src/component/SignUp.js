import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import Copyright from '../common/CopyRight'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Avatar,
  Button,
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
  
  // const [checkId, setCheckId] = useState(false)
  // const [checkSubmit, setCheckSubmit] = useState(false)
  // const [uid, setId] = useState('');
  // const [uemail, setEmail] = useState('');
  // const [upassword, setPassword] = useState('');
  // const [ufirstName, setFirstName] = useState('');
  // const [ulastName, setLastName] = useState('');
  // const [ugender, setGender] = useState('');
  // const [ubirthdayY, setBirthdayY] = useState(new Date().getFullYear());
  // const [ubirthdayM, setBirthdayM] = useState('01');
  // const [ubirthdayD, setBirthdayD] = useState(1);
  // const [uphone1, setPhone1] = useState('');
  // const [uphone2, setPhone2] = useState('');
  // const [uphone3, setPhone3] = useState('');
  
  const [checkId, setCheckId] = useState(false)
  const [checkSubmit, setCheckSubmit] = useState(false)
  const [uid, setId] = useState('');
  const [uemail, setEmail] = useState('a');
  const [upassword, setPassword] = useState('1234');
  const [ufirstName, setFirstName] = useState('a');
  const [ulastName, setLastName] = useState('a');
  const [ugender, setGender] = useState('a');
  const [ubirthdayY, setBirthdayY] = useState(new Date().getFullYear());
  const [ubirthdayM, setBirthdayM] = useState('01');
  const [ubirthdayD, setBirthdayD] = useState(1);
  const [uphone1, setPhone1] = useState('1');
  const [uphone2, setPhone2] = useState('2');
  const [uphone3, setPhone3] = useState('3');
 
  let submitFunc = (e) => {
    e.preventDefault()
    if (!checkId) return alert("아이디 중복확인해주세요")
    if (!checkSubmit) return alert("체크해주세요")


    let reqData = {
      uid,
      uemail,
      upassword,
      uname: ufirstName + ulastName,
      ugender,
      ubirthday: ubirthdayY + ubirthdayM + ubirthdayD,
      uphone: uphone1 + uphone2 + uphone3,
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
    Axios.post("/users/idcheck", { uid }).then(r => {
      let { data } = r;
      (data.code === 1) ? setCheckId(true) : setCheckId(false)
      alert(data.msg)
    })
    .catch(err=>{alert(err)})

  }

  const uidChangeFunc = (event) => {
    setId(event.target.value);
  }
  const uemailChangeFunc = (event) => {
    setEmail(event.target.value);
  }
  const upasswordChangeFunc = (event) => {
    setPassword(event.target.value);
  }
  const ufirstNameChangeFunc = (event) => {
    setFirstName(event.target.value);
  }
  const ulastNameChangeFunc = (event) => {
    setLastName(event.target.value);
  }
  const ugenderChangeFunc = (event) => {
    setGender(event.target.value);
  }
  const ubirthdayYChangeFunc = (event) => {
    setBirthdayY(event.target.value);
  }
  const ubirthdayMChangeFunc = (event) => {
    setBirthdayM(event.target.value);
  }
  const ubirthdayDChangeFunc = (event) => {
    setBirthdayD(event.target.value);
  }
  const uphone1ChangeFunc = (event) => {
    setPhone1(event.target.value);
  }
  const uphone2ChangeFunc = (event) => {
    setPhone2(event.target.value);
  }
  const uphone3ChangeFunc = (event) => {
    setPhone3(event.target.value);
  }
  const ucheckChangeFunc = () => setCheckSubmit(!checkSubmit)


  return (

    <Container component="main" maxWidth="xs">
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
                name="uid"
                value={uid}
                autoComplete="id"
                autoFocus
                onChange={uidChangeFunc}
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
                name="uemail"
                value={uemail}
                autoComplete="email"
                onChange={uemailChangeFunc}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="upassword"
                label="Password"
                type="password"
                id="password"
                value={upassword}
                autoComplete="current-password"
                onChange={upasswordChangeFunc}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="ufirstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={ufirstName}
                autoComplete="fname"
                onChange={ufirstNameChangeFunc}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="ulastName"
                value={ulastName}
                autoComplete="lname"
                onChange={ulastNameChangeFunc}
              />
            </Grid>
            <Grid item xs={12} >
      
              <FormControl  required  className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">gender</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={ugender}
                  name="ugender"
                  onChange={ugenderChangeFunc}
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
                  value={ubirthdayY}
                  name="ubirthdayY"
                  onChange={ubirthdayYChangeFunc}
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
                  value={ubirthdayM}
                  name="ubirthdayM"
                  onChange={ubirthdayMChangeFunc}
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
                  value={ubirthdayD}
                  name="ubirthdayD"
                  onChange={ubirthdayDChangeFunc}
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
                name="uphone1"
                value={uphone1}
                onChange={uphone1ChangeFunc}
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
                name="uphone2"
                value={uphone2}
                onChange={uphone2ChangeFunc}
              />
            </Grid><Grid item xs={4}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="phone3"
                label="Phone"
                name="uphone3"
                value={uphone3}
                onChange={uphone3ChangeFunc}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" onChange={ucheckChangeFunc} />}
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