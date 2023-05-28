import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Shopping from'@material-ui/icons/ShoppingCart'
import SearchBar from 'material-ui-search-bar';
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../SignUp/SignUpPage";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft:5
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const[isLogged,setLogged]=useState(false)
  const toggleSignIn=()=>{
  if(isLogged){
    setLogged(false)
    }

  }


  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static">
        <Toolbar>
          <Shopping/>
          <Typography variant="h6" className={classes.title}>
            upGrad E-Shop
          </Typography>
          {isLogged && <SearchBar style={{marginRight:"350px",backgroundColor:"#b1baec"}}/>}
          <Link to ={'./login'} onClick={toggleSignIn} style={{color:"white",paddingRight:"20px"}}>{isLogged?"Logout":"Login"}</Link>
          <Link to ={'/'} style={{color:"white",paddingRight:"20px"}}>{isLogged?"Home":""}</Link>
          {!isLogged &&<Link to={'./signup'} style={{color:"white"}}>Sign Up</Link>}
        </Toolbar>
      </AppBar>
      <Routes>
          <Route exact path='/login' element={<LoginPage setLogged={setLogged} isLogged={isLogged} />}></Route>
          <Route exact path='/signup' element={<SignUpPage setLogged={setLogged} />}></Route>
          </Routes>
          </Router>
    </div>
  );
}
