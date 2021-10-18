import React from 'react';
import { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Change from "./Change"

class Navigate extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    }
  }
  name=()=>{
  const {email, password} =this.state
  const name=email;
  }
  render() {
    return (
      <>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ mr:5}} >
                Home
              </Typography>
              <Button color="inherit" size="large" sx={{ mr: 5}}>
                <Link to="/Change" style={{color:"white"}}> Change Password</Link>
              </Button>
              <Typography variant="h6" component="div" sx={{ mr: 5}} >
                Welcome:
              </Typography>
              <Button color="inherit" sx={{ ml: 80}} href="/Sign">Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    )
  }
}
export default Navigate;
