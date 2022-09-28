import { Modal, Box, Button, TextField, InputAdornment, Fade, Typography } from '@mui/material';
import React, { useState } from 'react';
import { addQuestion } from '../../api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    p: 4,
  };

const QuestionForm = ({user, token, open, handleClose }) => {
    const [ questionInfo, setQuestionInfo ] = useState({ title:'', description:'' });
    const handleSubmit = (event)=>{
        addQuestion({
            title: questionInfo.title, 
            description: questionInfo.description, 
            askedBy:user._id
        });
    };
    if(!user){
        return(
            <Modal open={open} onClose={handleClose}>
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography variant='h6'>Please sign in before adding questions</Typography>
                    </Box>
                </Fade>
            </Modal>
        )
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <TextField 
                        fullWidth 
                        variant="standard"
                        placeholder="What would you like to know"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">?</InputAdornment>,
                            style: {fontSize: 25}
                        }}
                        required
                        autoFocus={true}
                        value={questionInfo.title}
                        onChange={(e)=> setQuestionInfo({...questionInfo, title: e.target.value})}
                    />
                    <TextField
                        multiline
                        placeholder="Write some description to help others better understand your question (optional)."
                        fullWidth
                        rows={4}
                        sx= {{mt:1, mb:1}}
                        name="description"
                        value={questionInfo.description}
                        onChange={(e)=> setQuestionInfo({...questionInfo, description: e.target.value})}
                    />
                    <Button 
                        sx={{borderRadius:5, float:'right'}}
                        variant='contained'
                        type='submit'
                        onClick={handleSubmit}
                    >Add Question</Button>
                </Box>
            </Fade>
        </Modal>
    )
}

export default QuestionForm;