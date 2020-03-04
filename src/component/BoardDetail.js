import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core/';
import { useParams } from 'react-router-dom';
import AlginList from '../atom/AlginList'
import MultilineTextFields from '../atom/MultilineTextFields'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
  },
 
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  
  const params = useParams();

  const [bno,setBno] = useState('')
  const [btitle,setBtitle] = useState('')
  const [buser,setBuser] = useState('')
  const [bcontents,setBcontents] = useState('')
  const [bdate,setBdate] = useState('')
  const [breplys,setBreplys] = useState([])


  function getFormatDate(arg) {
    var date = new Date(arg)
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return year + '-' + month + '-' + day;
  }
  
  let reciveData=()=>{
      Axios.get('/board/reply').then(r=>{
          if(r.data.code ===1){
            alert(r.data.msg)
            setBreplys(r.data.data)
          }else{
            alert(r.data.msg)
          }
      }).catch(err=>{
        console.log(err)
      })
  }

  useEffect(()=>{

    //마운트 로딩
    Axios.get(`/board/detail/${params.id}`).then(r=>{
      let {data} = r
     console.log(data)
      if(data.code ===1){
          setBno(data.data.bno)
          setBtitle(data.data.btitle)
          setBuser(data.data.buser)
          setBcontents(data.data.bcontents)
          setBdate(getFormatDate(data.data.updatedAt))
          reciveData()
           return
          }else{
           alert(data.msg)
       }
      }).catch(err=>{
          alert(err)
      })

      //조회수추가
      Axios.post(`/board/detail/${params.id}`).then(r=>{
        console.log(r)
        }).catch(err=>{
            alert(err)
        })
  },[params.id])

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          {bno}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={buser}
        subheader={bdate}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"   >
         <b>title:  {btitle} </b><br/>
         <span dangerouslySetInnerHTML={{
            __html: bcontents
          }}></span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

    
      </CardActions>


      <MultilineTextFields reciveData={reciveData}></MultilineTextFields>
      <AlginList breplys={breplys}></AlginList>
         
    </Card>
  );
}