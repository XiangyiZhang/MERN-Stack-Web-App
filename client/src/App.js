import React, { useEffect }from 'react';
import { Button, Box, AppBar, Typography, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import Answers from './components/Answers/Answers';
import QuestionForm from './components/QuestionForm/QuestionForm';
import theme from './theme';
import { loadAns } from './slices/answerSlice';

//import SignIn from './components/SignIn/SignIn';

const App = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAns());
    },[])

    return(
        //<SignIn></SignIn>
        <ThemeProvider theme={theme}>  
            <Box sx={{ flexGrow: 1 }} color='secondary'>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0.73 }}>
                            Quohoo
                        </Typography>
                        <Button onClick={handleOpen} size='small'sx={{
                            bgcolor: 'button.ask',
                            borderRadius:5,
                            '&:hover': {bgcolor: 'button.hover'}
                            }}>Add Questions</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Answers/>
            <QuestionForm open = {open} handleClose = {handleClose}/>
        </ThemeProvider>
        
    )
}

export default App;