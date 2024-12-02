import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

//import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  const isLogged = localStorage.getItem("user");

  return (
     
    <div>
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
 
           </IconButton>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img src='/src/images/logo.png' width={50} height={50} />
           <Link to={'/'}><Button color="inherit" style={{color:"white", fontSize:'25px'}}>Home</Button></Link>
           <Link to={'/admin'}><Button color="inherit" style={{color:"white", fontSize:'15px'}}>Admin</Button></Link>
           </Typography>
          <Link to={'/login'}> <Button color="inherit" style={{color:"white", fontSize:'15px'}}>Login</Button></Link>
          <Link to={'/signup'}><Button color="inherit" style={{color:"white", fontSize:'15px'}}>SignUp</Button></Link>
          
         
         
 
         </Toolbar>
       </AppBar>
     </Box>
     </div>
  )
}

export default NavbarComponent