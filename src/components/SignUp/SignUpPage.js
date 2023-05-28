import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton, { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

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

export default function SignUpPage() {
  const classes = useStyles();

  return (
    <form>
<div style={{textAlign:"center",paddingTop:"20px"}} >
 <Typography variant='h6'>Sign Up</Typography>
 <Grid direction='column'>
  <Grid item style={{paddingTop:"10px",paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="First Name" required size="small" variant="outlined" />
 </Grid>
 <Grid item style={{paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="Last Name" required size="small" variant="outlined" type='password' />
 </Grid>
 <Grid item style={{paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="Email Address" required size="small" variant="outlined" type='password' />
 </Grid>
 <Grid item style={{paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="Password" required size="small" variant="outlined" type='password' />
 </Grid>
 <Grid item style={{paddingBottom:"25px"}}>
 <TextField id="outlined-basic" label="Confirm Password" required size="small" variant="outlined" type='password' />
 </Grid>
 <Grid item>
 <TextField id="outlined-basic" label="Contact Number" required size="small" variant="outlined" type='password' />
 </Grid>
 <Grid item style={{paddingTop:"10px"}}> 
<Button type="submit" color='primary' variant='contained'>Sign Up</Button>
 </Grid>
 </Grid>
</div>
</form>
  )
}
