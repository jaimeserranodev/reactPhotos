import React from "react";
import { useDispatch } from "react-redux";
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFavorite } from "../../features/favorite/favoriteSlice";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";
import DescriptionModal from "../modalDescription/modalDescription";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const FavoritePhoto = ({ item, wasRemoved }) => {
    const dispatch = useDispatch();

    let handleClick = (e) => {
        dispatch(removeFavorite(e))
        wasRemoved()
    }

    let handleDownload = (e) => {
        saveAs(e)
    }

    return (
        <>
        {item && item.id && (
                <div style={{ height: '600px', position: 'relative' }}>
                    <ImageListItem style={{ height: '300px', width: '300px', padding: '0px'  }}>
                        <img
                            src={item.urls.small_s3}
                            alt={item.description}
                        />
                    </ImageListItem>
                    <div style={{ color: 'black', margin: '0', padding: '0 7px', fontFamily: 'Roboto, sans-serif', height: '160px', width:'300px' }}>
                        <p>Likes: {item.likes}</p>
                        <p>Width: {item.width}</p>
                        <p>Height: {item.height}</p>
                        <p>Description: {item.description}</p>
                    </div>

                    <div style={{backgroundColor:'white', height:'150px'}}>
                        <HeartBrokenIcon style={{ 
                            fontSize:'50px', 
                            color: 'rgb(0, 151, 167)', 
                            position: 'absolute', 
                            bottom: '20px', 
                            left: '10px' }} 
                            onClick={() => handleClick(item)} />
                        <DownloadIcon style={{
                            fontSize:'50px', 
                            color: 'rgb(0, 151, 167)', 
                            position: 'absolute', 
                            bottom: '20px', 
                            left: '240px' }} 
                            onClick={() => handleDownload(item.urls.regular)} />
                        <DescriptionModal id={item.id} auxDescription={item.auxDescription}/>
                    </div>
                </div>
            )}
        </>
    )
};

export default FavoritePhoto;
