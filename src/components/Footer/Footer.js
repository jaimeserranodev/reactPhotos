import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';


export default function LabelBottomNavigation() {
const [value, setValue] = React.useState('recents');

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <div style={{backgroundColor: '#0097A7', }}>
    <BottomNavigation sx={{
        width: '20vh',
        margin: '50px auto 0px auto',
        background: '#E0F2F1',
        borderRadius: '15px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        }} value={value} onChange={handleChange}>
    <p style={{
        fontFamily:'Leckerli One',
        color:'#0097A7',
        fontSize: '25px',
        textAlign: 'center',
        alignItems: 'center'


    }}>
        React Photos</p>
    </BottomNavigation>
    </div>
);
}