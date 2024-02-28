import { useSelector, useDispatch } from "react-redux";
import { React, useEffect, useState } from "react";
import { searchPhoto } from "../../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import { addFavorite, removeFavorite } from "../../features/favorite/favoriteSlice"; // Asegúrate de importar correctamente
import Pagination from '@mui/material/Pagination';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Home = () => {
    const dispatch = useDispatch();
    const photos = useSelector((store) => store.search.list);
    const favorite = useSelector((store) => store.favorite.list);
    const [page, setPage] = useState(1);
    const [styleNotification, setStyleNotification] = useState({ display: 'none' });
    const [notificationMessage, setNotificationMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(false);
        dispatch(searchPhoto({ page }))
            .then(() => setLoading(false))
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [dispatch, page]);

    const handleClick = (photo) => {
        const isFavorite = favorite.some((item) => item.id === photo.id);
        if (isFavorite) {
            dispatch(removeFavorite({ id: photo.id }));
            showNotification('The photo has been removed from favorites', false);
        } else {
            dispatch(addFavorite(photo));
            showNotification('The photo is added to favorites',);
        }
    };

    const showNotification = (message, isAddition = true) => {
    setNotificationMessage(message);
    setStyleNotification({
        backgroundColor: isAddition ? '#4caf50' : '#f44336', // Verde para adiciones, rojo para eliminaciones
        color: 'white',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px',
        borderRadius: '4px',
        display: 'block'
    });
    setTimeout(() => {
        setStyleNotification({ display: 'none' });
    }, 3000);
};

    const handleChange = (e, value) => {
        setPage(value);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <CssBaseline />
            <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {photos.map((photo) => {
                    const isFavorite = favorite.some(item => item.id === photo.id);
                    return (
                        <ImageListItem key={photo.id} style={{ height: '300px', width: '300px', margin: '10px 0' }}>
                            <img src={photo.urls.small_s3} alt={photo.alt_description} />
                            <StarBorderIcon
                                style={{ color: isFavorite ? '#0097A7' : 'white', position: 'relative', top: '-270px', left: '10px', fontSize: '50px' }}
                                onClick={() => handleClick(photo)}
                            />
                        </ImageListItem>
                    );
                })}
            </Container>
            <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
                <Pagination count={10} variant="outlined" color="primary" page={page} onChange={handleChange} style={{ width: '30%', margin: '30px auto' }} />
            </div>
            <div style={styleNotification}>
                <p>{notificationMessage}</p>
            </div>
        </>
    );
};

export default Home;