import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    list: JSON.parse(localStorage.getItem('myFavorites')) || []
}




let favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (state.list.some(item => item.id === action.payload.id)) {
                return state;
            } else {
                state.list.push(action.payload)
                localStorage.setItem('myFavorites', JSON.stringify(state.list))
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id)
            localStorage.setItem('myFavorites', JSON.stringify(state.list))
        },
        editDescription: (state, action) => {
            const { id, description } = action.payload;
            if (id === undefined) {
              console.error('ID is undefined');
              return;
            }
            state.list = state.list.map(item => {
              if (item.id === id) {
                return { ...item, description: description };
              } else {
                return item;
              }
            });
            localStorage.setItem('myFavorites', JSON.stringify(state.list));
          },
          
        sortBy: (state, action) => {
            switch (action.payload) {
                case 'height':
                    state.list.sort((a, b) => { return a.height - b.height })
                    break
                case 'width':
                    state.list.sort((a, b) => { return  a.width - b.width })
                    break
                case 'likes':
                    state.list.sort((a, b) => { return a.likes - b.likes })
                    break
                case 'dateAdd':
                    state.list.sort((a, b) => { return a.date - b.date })
                    break
                default:
                    state.list = JSON.parse(localStorage.getItem('myFavorites'))
            }
        },
        searchFAvorite: (state, action) => {
            const searchTerm = typeof action.payload === 'string' ? action.payload : action.payload.toString();
            if (searchTerm === '') {
              state.list = JSON.parse(localStorage.getItem('myFavorites'));
            } else {
              state.list = JSON.parse(localStorage.getItem('myFavorites'));
              state.list = state.list.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
            }
          }
        }
    })

export default favoriteSlice.reducer;
export const { addFavorite, removeFavorite, sortBy, editDescription, searchFAvorite } = favoriteSlice.actions