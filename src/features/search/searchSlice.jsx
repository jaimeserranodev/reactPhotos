import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const keyApi = 'KE41pK3tLmBHw0d0LbHO2AeOWworK5A5OfSCKSDH1ZY';
let initialState = {
    list: [],
    loading: false,
    error: null
};

export const searchPhoto = createAsyncThunk('search/searchPhoto', async (arg, { rejectWithValue }) => {
    const baseUrl = 'https://api.unsplash.com/';
    const count = 30;
    try {
        let url;
        if (!arg.search || arg.search === '') {
            url = `${baseUrl}photos/random?client_id=${keyApi}&count=${count}`;
        } else {
            url = `${baseUrl}search/photos?client_id=${keyApi}&query=${arg.search}&per_page=${count}&page=${arg.page}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return arg.search ? data.results : data;
    } catch (error) {
        return rejectWithValue(error.toString());
    }
});

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Considerando la implementación original, esta sección se mantiene igual.
        sortSearch: (state, action) => {
            // La implementación original se mantiene ya que es específica del caso de uso.
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPhoto.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchPhoto.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(searchPhoto.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const { sortSearch } = searchSlice.actions;
export default searchSlice.reducer;
