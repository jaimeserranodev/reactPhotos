import React, { useState } from "react";
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPhoto } from "../../features/search/searchSlice"; // Asegúrate de ajustar la ruta de importación

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
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

const theme = createTheme({
    palette: {
        primary: {
            main: '#0097A7',
        },
    },
    typography: {
        fontFamily: [
            'Leckerli One',
            'Open Sans',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

const SearchAppBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchAction = (ev) => {
        const newSearch = ev.target.value;
        setSearch(newSearch);
        if (newSearch.trim() !== '') {
            dispatch(searchPhoto({ search: newSearch }));
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            React Gallery
                        </Typography>
                        <nav style={{ display: 'flex' }}>
                            <Link to='/' style={{ color: 'white', textDecorationLine: 'none', fontSize: '16px', fontWeight: '700' }}>Home</Link>
                            <Link to='/favoriteList' style={{ color: 'white', textDecorationLine: 'none', margin: '0 30px', fontSize: '16px', fontWeight: '700' }}>Gallery</Link>
                        </nav>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={searchAction}
                                value={search}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default SearchAppBar;
