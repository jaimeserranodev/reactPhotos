import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
const [value, setValue] = React.useState('recents');

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <div style={{backgroundColor: '#0097A7'}}>
    <BottomNavigation sx={{
        width: 500,
        margin: '50px auto 0px auto',
        background: '#E0F2F1',
        borderRadius: '15px'
        }} value={value} onChange={handleChange}>
    <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
    />
    <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
    />
    <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
    />
    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    </div>
);
}