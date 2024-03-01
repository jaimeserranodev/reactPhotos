import React from "react";
import { useDispatch } from "react-redux";
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFavorite } from "../../features/favorite/favoriteSlice";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";
import DescriptionModal from "../modalDescription/modalDescription";
import "@fontsource/roboto/400.css"; // Importa solo el peso que utilizas

const FavoritePhoto = ({ item, wasRemoved }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeFavorite(item));
        wasRemoved();
    };

    const handleDownload = () => {
        saveAs(item.urls.regular);
    };

    return item && item.id ? (
        <div style={{ height: '600px', position: 'relative' }}>
            <ImageListItem style={{ height: '300px', width: '300px', padding: '0px' }}>
                <img src={item.urls.small_s3} alt={item.description || "Photo description"} loading="lazy"/>
            </ImageListItem>
            <div style={{ color: 'black', margin: '0', padding: '0 7px', fontFamily: 'Roboto, sans-serif', height: '160px', width: '300px' }}>
                <p>Likes: {item.likes}</p>
                <p>Width: {item.width}</p>
                <p>Height: {item.height}</p>
                <p>Description: {item.description || 'No description'}</p>
            </div>
            <div style={{ backgroundColor: 'white', height: '150px' }}>
                <HeartBrokenIcon
                    style={{ fontSize: '50px', color: 'rgb(0, 151, 167)', position: 'absolute', bottom: '20px', left: '10px' }}
                    onClick={handleClick}
                />
                <DownloadIcon
                    style={{ fontSize: '50px', color: 'rgb(0, 151, 167)', position: 'absolute', bottom: '20px', left: '240px' }}
                    onClick={handleDownload}
                />
                <DescriptionModal id={item.id} auxDescription={item.auxDescription}/>
            </div>
        </div>
    ) : null;
};

export default FavoritePhoto;