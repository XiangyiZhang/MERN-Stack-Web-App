import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Box, Button, Avatar, CssBaseline, TextField, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signIn, signUp} from '../../slices/authSlice';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 4,
  alignItems: 'center',
  flexDirection: 'column',
  display: 'flex',
};

export default function SignInForm({open, handleClose}) {
  const [errMessage, setErrMessage] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const dispatch = useDispatch();
  const switchMode = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if(!isSignIn){
      if(formData.get('password')!==formData.get('repeat')){
        setPasswordMatch(false);
        return;
      }else{
        setPasswordMatch(true);
      }
    }

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    }

    if(!data.username || !data.password){
      setErrMessage('Please fill all entries.');
      return;
    }

    if(isSignIn){
      dispatch(signIn(data)).unwrap().then().catch((err)=>{
        console.log(err);
        setErrMessage(err.message);
      });
      
    }else{ 
      dispatch(signUp(data));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={handleClose}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={style}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus/>
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"/>
              {isSignIn ?<></>:<TextField margin="normal" required fullWidth name="repeat" label="Confirm Password" type="password" id="repeat"/>}
              {passwordMatch || isSignIn?<></>:<Typography color='error' variant='body2'>Password does not match.</Typography>}
              {!errMessage || !isSignIn?<></>:<Typography color='error' variant='body2'>{errMessage}</Typography>}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {isSignIn ? "Sign In" : "Sign Up"}
              </Button>
              <Button onClick={switchMode} sx={{textTransform: 'none'}}>
                {isSignIn ? "Don't have a Quohoo account? Sign Up" : "Already have a Quohoo account? Sign in"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </ThemeProvider>
  );
}