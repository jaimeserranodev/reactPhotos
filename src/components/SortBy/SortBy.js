import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sortSearch } from '../../features/search/searchSlice';
import { sortBy } from '../../features/favorite/favoriteSlice';
import './SortBy.css';


export default function BasicSelect() {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');

    const onSort = (e) => {
        const value = e.target.value;
        dispatch(sortBy(value));
        dispatch(sortSearch(value));
        setSelectedValue(value);
    };

    return (
        <div className='sortBy'>
            <Box sx={{ minWidth: 120, maxWidth: 300, alignItems: 'center' }}>
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={selectedValue}
                        label={selectedValue ? undefined : 'Sort By'}
                        
                        onChange={(target) => {
                            onSort(target);
                        }}
                    >
                        <MenuItem value='none'>None</MenuItem>
                        <MenuItem value='width'>Width</MenuItem>
                        <MenuItem value='height'>Height</MenuItem>
                        <MenuItem value='likes'>Likes</MenuItem>
                        <MenuItem value='date'>Date</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}
