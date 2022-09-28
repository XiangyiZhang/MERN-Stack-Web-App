import { Box, Container, Divider, Typography, Link as LinkMaterial } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkReactRouter } from 'react-router-dom';


export default function Question({question}){
    const theme = createTheme({
        palette: {
            grey: {
              main: '#9e9e9e',
              dark: '#616161',
            },
            background: {
              paper: '#fff',
            }
          },
    });
    return(
        <ThemeProvider theme={theme}>
            <Container sx={{width: 800 }}>
                <Box 
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 1,
                        pl: 2,
                        pr: 2,
                        boxShadow:8, border:4, borderBotton:2, borderTop:2, borderColor:'common.black'
                    }}>
                    <Typography variant='body2' color = 'grey.dark' sx={{  }}>
                        A question is waiting for your answer
                    </Typography>
                    <LinkMaterial variant='subtitle1' component={LinkReactRouter} to={`/question/${question._id}`} sx={{ fontWeight: 'bold', color:"common.black", textDecoration: "none", "&:hover": {}}} >
                        {question.title}
                    </LinkMaterial>
                    <Divider/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}