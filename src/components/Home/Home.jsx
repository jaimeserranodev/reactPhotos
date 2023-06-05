import { useSelector, useDispatch } from "react-redux";
import { React, useEffect, useState } from "react";
import { searchPhoto } from "../../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import { addFavorite } from "../../features/favorite/favoriteSlice";
import Pagination from '@mui/material/Pagination';
import StarBorderIcon from '@mui/icons-material/StarBorder';



const Home = () => {
    const dispatch = useDispatch();
    const photos = useSelector((store) => store.search.list);
    const favorite = useSelector((store) => store.favorite.list);
    const [page, setPage] = useState(1);
    const [styleAddPhoto, setStyleAddPhoto] = useState({ display: 'none' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        useEffect(() => {
            setLoading(true);
            dispatch(searchPhoto({ page }))
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
        }, [dispatch, page]);

    const handleClick = (e) => {
        dispatch(addFavorite(e));
        setStyleAddPhoto({
        backgroundColor: '#0097A7',
        width: '150px',
        borderRadius: '20px',
        position: 'fixed',
        margin:'25%',
        bottom: '200px',
        right: '20%',
        textAlign: 'center',
        color: 'white',
        });
        setTimeout(() => {
        setStyleAddPhoto({ display: 'none' });
        }, 1500);
    };

    const handleChange = (e, p) => {
        setPage(p);
    };



    const favoriteList = useSelector(state => state.favorite.list);

    if (!favoriteList) {
        return null; 
}
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

return (
    <>
    <CssBaseline />
    <Container style={{ display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    
    }}>
        {photos.map((index, i) => {
        return (
            <ImageListItem key={photos[i].id} style={{ 
                height: '300px', 
                width: '300px', 
                margin: '10px 0' 
                }}>
            <img src={photos[i].urls.small_s3} alt={photos[i].alt_description} />
            {favorite.some((item) => item.id === photos[i].id) ? (
                <StarBorderIcon style={{ 
                    color: '#0097A7', 
                    position: 'relative', 
                    top: '-70px', 
                    left: '10px', 
                    fontSize: '50px' 
                }} />
            ) : (
                <StarBorderIcon
                style={{ color: 'white', position: 'relative', top: '-270px', left: '10px', fontSize: '50px' }}
                onClick={() =>
                    handleClick({
                    id: photos[i].id,
                    width: photos[i].width,
                    height: photos[i].height,
                    likes: photos[i].likes,
                    urls: photos[i].urls,
                    description: photos[i].alt_description,
                    auxDescription: photos[i].alt_description,
                    date: new Date(),
                    })
                }
                />
            )}
            </ImageListItem>
        );
        })}
    </Container>
    <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
        <Pagination style={{width:'30%', margin: '30px auto' }} count={10} variant="outlined" color="primary" page={page} onChange={handleChange} />
    </div>
    <div style={styleAddPhoto}>
        <p>The photo is added</p>
    </div>
    </>
);
};
export default Home;