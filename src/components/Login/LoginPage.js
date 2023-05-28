import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton, { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import MenuIcon from '@material-ui/icons/Menu';
import {Shopping,Lock} from'@material-ui/icons'
import { Grade } from '@material-ui/icons';
import ProductsPage from '../ProductsPage/ProductsPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignText:"center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft:5
  },
  container :{
    display: "flex",
    justifyContent: "center"
  }
}
));

export default function LoginPage(props) {
  const classes = useStyles();
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  const[showProd,setShowProd]=useState(false)
  const [admin,setAdmin]=useState(false)
  const auth = {
  email:"user@gmail.com",
  password:"user@1234"
  }
    const adminAuth = {
    email:"admin@gmail.com",
    password:"admin@1234"
    }

  
  const handleSignIn=(e)=>{
    e.preventDefault();
    if(email !="" && password!=""){
    if(email==auth.email && password==auth.password){
      props.setLogged(true)
      setShowProd(true)
      setAdmin(false)
      }
      else if(email==adminAuth.email && password==adminAuth.password){
      props.setLogged(true)
      setShowProd(true)
      setAdmin(true)
      }
      else{
      alert('Invalid Username and Password')
      setAdmin(false)
      setShowProd(false)
      }
    }
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  return (
    <>
    {!showProd && !props.isLogged && <form>
<div style={{textAlign:"center",paddingTop:"20px"}} >
  <Lock style={{color:"#DE3163"}}></Lock>
 <Typography variant='h6'>Sign In</Typography>
 <Grid direction='column'>
  <Grid item style={{paddingTop:"10px",paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="Email Address" value = {email} onChange = {handleEmail} required variant="outlined" />
 </Grid>
 <Grid>
 <TextField id="outlined-basic" label="Password" required variant="outlined" onChange = {handlePassword}  value ={password} type='password' />
 </Grid>
 <Grid item style={{paddingTop:"10px"}}> 
<Button color='primary' variant='contained'type="submit" onClick={handleSignIn}>Sign In</Button>
 </Grid>
 </Grid>
</div>
</form>}
{showProd && props.isLogged && <ProductsPage admin={admin}/>}
</>
  )
}
