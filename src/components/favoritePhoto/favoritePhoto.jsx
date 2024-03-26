import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import DownloadIcon from '@mui/icons-material/Download';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { removeFavorite } from "../../features/favorite/favoriteSlice";
import { saveAs } from "file-saver";
import DescriptionModal from "../modalDescription/modalDescription";
import "@fontsource/roboto/400.css"; // Importa solo el peso que utilizas

const FavoritePhoto = ({ item, wasRemoved }) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        dispatch(removeFavorite(item));
        wasRemoved();
    };

    const handleDownload = () => {
        saveAs(item.urls.regular);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    if (!item || !item.id) return null;

    return (
        <div style={{ height: '600px', position: 'relative', backgroundColor: 'white' }}>
            <ImageListItem style={{ height: '300px', width: '300px', padding: '0px' }}>
                <img src={item.urls.small_s3} alt={item.description || "Photo description"} loading="lazy"/>
            </ImageListItem>
            <div style={{ 
                boxSizing: 'border-box',
                color: 'black', 
                margin: '0', 
                paddingLeft: '20px',
                fontFamily: 'Roboto, sans-serif', 
                height: '160px', 
                width: '300px',
                overflowY: 'auto',
                backgroundColor: '#0097A7',
                // Estilos para el scrollbar
                scrollbarWidth: 'thin', /* "auto" o "thin" */
                scrollbarColor: '#90caf9 #eceff1', /* color del thumb y track */
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#eceff1',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#90caf9',
                    borderRadius: '20px',
                    border: '3px solid #eceff1', /* Crea bordes transparentes alrededor del thumb */
                }
            }}>
                <p>Likes: {item.likes}</p>
                <p>Width: {item.width}</p>
                <p>Height: {item.height}</p>
                <p>Description: {item.description || 'No description'}</p>
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: 'white', 
                height: '100px', 
                padding: '0 10px'
            }}>
                <HeartBrokenIcon
                    style={{ fontSize: '50px', color: 'rgb(0, 151, 167)', cursor: 'pointer' }}
                    onClick={handleClick}
                />
                <DownloadIcon
                    style={{ fontSize: '50px', color: 'rgb(0, 151, 167)', cursor: 'pointer' }}
                    onClick={handleDownload}
                />
                <EditNoteIcon
                    style={{ fontSize: '50px', color: 'rgb(0, 151, 167)', cursor: 'pointer' }}
                    onClick={toggleModal}
                />
            </div>
            <DescriptionModal open={modalOpen} handleClose={toggleModal} id={item.id} auxDescription={item.auxDescription}/>
        </div>
    );
};

export default FavoritePhoto;
