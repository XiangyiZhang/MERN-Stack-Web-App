import React, { useState } from 'react'
import { Button, Box, AppBar, Toolbar, Link, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { logOut } from '../../slices/authSlice';

const NavBar = ({user, token, handleOpenQuestionForm, handleOpenSigninForm}) => {
    const dispatch = useDispatch();
    const handleSignOut = () => dispatch(logOut());

    return (
        <Box sx={{ flexGrow: 1}} color='secondary'>
            <AppBar sx={{}}>
                <Toolbar>
                    <div style={{left: '50%', position: 'relative'}}>
                        <Link variant="h4" href="/" color="common.white" underline="none" sx={{position: 'relative', right: '400%', fontFamily:'Ubuntu'}}>
                            Quohoo
                        </Link>
                    </div>

                    <div style={{left: '50%', position: 'relative'}}>
                        <Button onClick={handleOpenQuestionForm} size='mid'sx={{
                            color:'common.black',
                            position: 'relative', left: '80%',
                            bgcolor: 'button.ask',
                            borderRadius:2,
                            '&:hover': {bgcolor: 'button.hover', borderRadius:5}
                            }}>Add Question
                        </Button>
                        {!user?
                            <Button onClick={handleOpenSigninForm} size='mid'sx={{ color:'common.black', position: 'absolute', left: 200, bgcolor: 'button.ask', borderRadius:2, whiteSpace: 'nowrap', minWidth: 'auto', '&:hover': {bgcolor: 'button.hover', borderRadius:5}
                                }}>Sign In/Sign Up
                            </Button> :
                            <Button onClick={handleSignOut} size='mid'sx={{ color:'common.black', position: 'absolute', left: 200, bgcolor: 'button.ask', borderRadius:2, whiteSpace: 'nowrap', minWidth: 'auto', '&:hover': {bgcolor: 'button.hover', borderRadius:5}
                                }}>Sign Out
                            </Button>
                        }
                    </div>
                    <div style={{left: '50%', right: '50%', position: 'relative'}}>.
                        {user?
                            <Typography align='left' sx={{position: 'absolute', left: 180, top:-2    }}>{user.username}</Typography>:<></>
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;