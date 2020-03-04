import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button,Box} from '@material-ui/core/';
import Axios from 'axios'
import store from '../store'
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
 
      width: "100%",
 
    },
  },
}));

export default function MultilineTextFields({reciveData}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleClick = event =>{
    if(!store.getState().islogin){
      return alert("로그인해주세요")
    }
    Axios.post("board/reply",{reply:value})
    .then(r=>{
      if(r.data.code ===1){
        alert(r.data.msg)
        reciveData()
      }else{
        alert(r.data.msg)
      
      }
    }).catch(err=>{
      alert(err)
    })
  
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
     <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
     
        <TextField
          id="outlined-multiline-static"
          label="reply"
          multiline
          rows="2"
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
          <Button  variant="contained" color="primary" onClick={handleClick}>등록</Button>
          
      </Box>
    </form>
  );
}