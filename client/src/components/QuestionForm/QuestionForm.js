import { Modal, Box, Button, InputBase, InputAdornment, Fade, Typography } from '@mui/material';
import React, { useState } from 'react';
import { addQuestion } from '../../api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#f2f2f2',
    p: 4,
    boxShadow:4,
  };

const QuestionForm = ({user, token, open, handleClose }) => {
    const [ questionInfo, setQuestionInfo ] = useState({ title:'', description:'' });
    const handleSubmit = (event)=>{
        addQuestion({
            title: questionInfo.title, 
            description: questionInfo.description, 
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
                    <InputBase 
                        fullWidth
                        placeholder="What would you like to know"
                        required
                        autoFocus={true}
                        value={questionInfo.title}
                        onChange={(e)=> setQuestionInfo({...questionInfo, title: e.target.value})}
                        sx={{p:1, borderTop:5, borderColor: '#7094db',fontSize:25, fontWeight:600, boxShadow:4, bgcolor:"common.white"}}
                    />
                    <InputBase
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
                        sx={{borderRadius:1, float:'right'}}
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