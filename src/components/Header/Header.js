import { React, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { sortBy } from "../../features/favorite/favoriteSlice";
import { searchPhoto } from "../../features/search/searchSlice";
// import { sortSearch } from "../../features/search/searchSlice";
import { searchFAvorite } from "../../features/favorite/favoriteSlice";



const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
        width: '20ch',
    },
    },
},
}));

const SearchAppBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
  
    const searchAction = (ev) => {
      setSearch(ev.target.value);
      dispatch(searchPhoto({ search }));
      dispatch(searchFAvorite({ search }));
    };
  
    const theme = createTheme({
      palette: {
        primary: {
          main: '#0097A7',
        },
      },
    });


return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        React Photos
                    </Typography>
                    <nav style={{display: 'flex'}}>
                        <Link to='/home' 
                            style={{color: 'white', 
                            textDecorationLine: 'none', 
                            fontSize: '16px',
                            fontWeight: '700'
                            }}
                        >Home
                        </Link>
                        <Link to='/favoriteList' 
                            style={{color: 'white', 
                            textDecorationLine: 'none', 
                            margin: '0 30px', 
                            fontSize: '16px', 
                            fontWeight: '700'
                            }}
                            >Galery
                        </Link>
                    </nav>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(ev) => searchAction(ev)}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </Box>
    </ThemeProvider>
);
};
export default  SearchAppBar;



// import { React, useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import { useDispatch } from "react-redux";
// import { sortBy } from "../features/favorite/favoriteSlice";
// import { searchPhoto } from "../features/search/searchSlice";
// import { sortSearch } from "../features/search/searchSlice";
// import { searchFAvorite } from "../features/favorite/favoriteSlice";

// function SearchOrder() {

//     let [search, setSearch] = useState('')

//     let dispatch = useDispatch()

//     // let onSort = (e) => {
//     //     dispatch(sortBy(e.target.value))
//     //     dispatch(sortSearch(e.target.value))
//     // }

//     let searchAction = (ev) =>{
//         setSearch(ev.target.value)
//         dispatch(searchPhoto({search: search}))
//         dispatch(searchFAvorite({ search: search }))
//     }



//     return (
//         <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             paddingLeft: '5%',
//             flexWrap: 'wrap'
//         }}>
//             <div>
//                 {/* <label htmlFor="" style={{ marginRight: '5px' }}>Sort by</label>
//                 <select name="filter" id="" placeholder="Filter" onChange={(target) => {onSort(target)}}>
//                     <option value="none">None</option>
//                     <option value="width">Width</option>
//                     <option value="height">Height</option>
//                     <option value="likes">Likes</option>
//                     <option value="date">Date</option>
//                 </select>
//             </div>
//             <div style={{
//                 display: 'flex',
//                 marginRight: '5%'
//             }}> */}
//                 <input onChange={(ev) => searchAction(ev)} type="text" placeholder="Search for description" style={{
//                     borderRadius: '5px',
//                     padding: '2px 4px',
//                     width: '300px',
//                 }} />
//                 {/* <SearchIcon onClick={() => searchAction()} style={{background: '#900c3f', color: 'white'}}/> */}
                
//             </div>
//         </div>
//     );
// }

// export default SearchOrder