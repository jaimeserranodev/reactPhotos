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
            // Implementación basada en tu lógica de ordenamiento.
            const sortBy = action.payload;
            switch (sortBy) {
                // Tu implementación de ordenamiento basada en el slice de favoritos.
                case 'height':
                    state.list.sort((a, b) => b.height - a.height);
                    break;
                case 'width':
                    state.list.sort((a, b) => b.width - a.width);
                    break;
                case 'likes':
                    state.list.sort((a, b) => b.likes - a.likes);
                    break;
                case 'dateAdd':
                    // Asegúrate de que tus objetos tengan una propiedad `date` adecuada para este ordenamiento.
                    state.list.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                // Considera manejar el caso 'none' si es necesario.
                default:
                    // Posible manejo del caso default.
                    break;
            }
        },
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
