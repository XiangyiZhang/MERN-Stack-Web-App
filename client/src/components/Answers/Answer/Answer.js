import * as React from 'react';
import { Box, Container, Stack, Divider, Typography, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Answer({ans}){
    const theme = createTheme({
        typography: {
            button: {
              textTransform: 'none'
            }
        },
        palette: {
          grey: {
            main: '#9e9e9e',
            dark: '#616161',
          },
          button: {
            unpressed: '#cceeff',
          },
          background: {
            paper: '#fff',
          }
        },
    });
    return(
        <ThemeProvider theme={theme}>
            <Container sx={{width: 0.5 }}r>
                <Box 
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pl: 2,
                        pr: 2,
                    }}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                        如何评价这个网站？
                    </Typography>
                    <Typography variant='subtitle2' color = 'grey.main'>
                        李白
                    </Typography>
                    <Typography variant='body2'>
                        {ans.content}
                    </Typography>
                    <Stack spacing={2} direction="row" sx= {{mt : 2, mb : 1}}>
                        <Button variant="text" size = 'small' sx={{
                            bgcolor:'button.unpressed',
                            '&:hover': {
                                backgroundColor: '#99ddff',
                                color: '#3c52b2',
                            },
                        }}>
                            <KeyboardArrowUpIcon/>
                            {!ans.likeCount ? 'Upvote' : ans.likeCount}
                        </Button>
                        <Button variant="text" color='grey' size = 'small'>
                            Comments
                        </Button>
                    </Stack>
                    <Divider/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}