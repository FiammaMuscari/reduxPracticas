import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'template',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state, /* action */ ) => {
      state.isLoading = true;
    },
    setPokemons: ( state, action ) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});
// Actiones generadas para cada caso del reducer
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;