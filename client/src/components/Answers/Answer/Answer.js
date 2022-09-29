import * as React from 'react';
import { Box, Container, Stack, Typography, Button} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import theme from './theme';

export default function Answer({ans, isMainPage}){
    
    return(
        <ThemeProvider theme={theme}>
            <Container sx={{width: 800 }}r>
                <Box 
                    sx={{ bgcolor: 'background.paper', pt: 2, pl: 2, pr: 2, borderBottom:1, boxShadow:8, borderColor:'grey.light'
                    }}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                        {isMainPage?ans.question?.title:''}
                    </Typography>
                    <Typography variant={isMainPage?'subtitle2':'subtitle1'} color = {isMainPage?'grey.dark':'common.black'} sx={{ fontWeight: isMainPage?'':'bold'}}>
                        {ans.author?.username}
                    </Typography>
                    <Typography variant='body2'>
                        {ans.content}
                    </Typography>
                    <Stack spacing={2} direction="row" sx= {{mt : 2, mb : 1}}>
                        <Button variant="text" size = 'small' sx={{
                            boxShadow:1,
                            bgcolor:'button.unpressed',
                            '&:hover': {
                                backgroundColor: '#99ddff',
                                color: '#3c52b2',
                            },
                            '&:active': {
                                boxShadow:0
                            },
                        }}>
                            <KeyboardArrowUpIcon/>
                            {!ans.likeCount ? 'Upvote' : ans.likeCount}
                        </Button>
                        <Button variant="text" color='grey' size = 'small' sx={{boxShadow:1,'&:active': {boxShadow:0}}} >
                            Comments
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    )
}