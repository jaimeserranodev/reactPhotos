import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EditNoteIcon from '@mui/icons-material/EditNote';
import { useDispatch } from "react-redux";
import { editDescription } from "../../features/favorite/favoriteSlice";


const style = {
    position: 'absolute',
    borderRadius: '20px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'rgb(224, 242, 241)',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    maxWidth: '500px'
};

const styleButton = {
    borderRadius: '10px',
    backgroundColor: 'rgb(0, 151, 167)',
    color: 'white',
    border: 'none',
    padding: '5px',
    fontWeight: '700px'
};

const styleInput = {
    width: '70%',
    margin: '2px',
    border: '2px solid black',
    borderRadius: '10px'
};

export default function DescriptionModal({id, auxDescription}) {
const [open, setOpen] = useState(false);
const [description, setDescription] = useState('');
const dispatch = useDispatch();

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const handleChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    console.log(value);

};

const addDescription = (id, description) => {
    dispatch(editDescription({ id, description }));
    setOpen(false);
    setDescription('');
};

const cancelDescription = () => {
    setOpen(false);
    setDescription('');
};

const defaultDescription = (id, description) => {
    dispatch(editDescription({ id, description }));
    setOpen(false);
    setDescription('');
};

return (
    <div>
    <Button onClick={handleOpen}><EditNoteIcon style={{  
                    fontSize:'50px', 
                    position: 'absolute',
                    color: 'rgb(0, 151, 167)', 
                    left: '125px', 
                    bottom: '-80px' }}/></Button>
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
    >
        <Fade in={open}>
        <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Add description
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <input type="text" onChange={handleChange} style={styleInput} />
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5px' }}>
            <button onClick={() => { addDescription(id, description) }} style={styleButton} >Ok</button>
            <button onClick={cancelDescription} style={styleButton}>Cancel</button>
            <button onClick={() => { defaultDescription(id, id.auxDescription) }} style={styleButton}>Default description</button>
            </div>
        </Box>
        </Fade>
    </Modal>
    </div>
);
}