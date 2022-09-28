import { Box, Container, Divider, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
            <Container sx={{width: 800 }}r>
                <Box 
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 1,
                        pl: 2,
                        pr: 2,
                    }}>
                    <Typography variant='body2' color = 'grey.dark' sx={{  }}>
                        A question is waiting for your answer
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                        {question.title}
                    </Typography>
                    <Divider/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}