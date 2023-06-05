import { React, useState } from "react";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
import FavoritePhoto from "../favoritePhoto/favoritePhoto";
import { Link } from "react-router-dom";

function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)

    let [styleRemovePhoto, setStyleRemovePhoto] = useState({ display: 'none' });
    
    let wasRemoved = () => {
        setStyleRemovePhoto(
                {
                        backgroundColor: '#0097A7',
                        borderRadius:'20px',
                        width: '150px',
                        position: 'fixed',
                        margin:'25%',
                        bottom: '200px',
                        right: '20%',
                        textAlign: 'center',
                        color: 'white'
                    })
                    setTimeout(() => {
                        setStyleRemovePhoto({ display: 'none' })
                    }, 1500)
                }
            



    return (
        <>
            
            
            <div style={{ display: 'flex', flexWrap: 'wrap', minHeight:'700px', justifyContent:'center', alignItems:'center' }}>
                {myFavorite.length === 0 ? <button on style={{ margin: '20px', backgroundColor: '#0097A7', width:'100px', height: '50px', borderRadius:'20px' }} >
                    <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }} >Go Home</Link></button> :
                    myFavorite.map((item) => {
                        return (
                            <Container style={{ height: '600px', width: '300px', margin: '20px 20px', padding: '0px', backgroundColor: '#E0F2F1', color: 'black' }}>
                                <FavoritePhoto item={item} key={item.id} wasRemoved={wasRemoved}  />
                            </Container>
                        )
                    })}
            </div>
            <div style={styleRemovePhoto}>
                <p>The photo was removed</p>
            </div>
        </>
    )
}

export default FavoriteList