import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { editDescription } from "../../features/favorite/favoriteSlice";

const style = {
    position: 'absolute',
    borderRadius: '20px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxWidth: '500px',
};

const DescriptionModal = ({ open, handleClose, id, auxDescription }) => {
    const [description, setDescription] = useState(auxDescription);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(editDescription({ id, description }));
        handleClose(); // Cerrar modal después de la acción
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={2}>
                        Edit Description
                    </Typography>
                    <textarea
                        id="modal-modal-description"
                        style={{ width: '100%', height: '100px' }}
                        value={description}
                        onChange={handleChange}
                    />
                    <Button 
                        style={{ marginTop: '20px' }} 
                        variant="contained" 
                        onClick={handleSubmit}>
                        Save
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};

export default DescriptionModal;