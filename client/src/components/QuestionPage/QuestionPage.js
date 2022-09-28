import React from 'react'
import { Box, Container, Divider, Typography, Paper, Link as LinkMaterial } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkReactRouter, useParams } from 'react-router-dom';
import { padding } from '@mui/system';


const QuestionPage = () => {
    const {id} = useParams();
    const theme = createTheme({
        palette: {
            box: {
                main: '#3071e8'
            },
            grey: {
              main: '#9e9e9e',
              dark: '#616161',
            },
            background: {
              paper: '#fff',
            }
          },
    });
    console.log(id);
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{width: 800, flexGrow:1}}>
                <Box sx={{bgcolor: 'background.paper', padding: 2, boxShadow:8, border:2, borderColor:'common.black'}}>
                    <Typography variant='h5' color = 'common.black' sx={{ fontWeight: 600 }}>
                        Why Are Your So Handsome?
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
export default QuestionPage