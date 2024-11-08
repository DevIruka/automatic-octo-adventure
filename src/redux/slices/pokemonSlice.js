import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokeLists: [
            { idx: 0, pokeid: "", filled: false },
            { idx: 1, pokeid: "", filled: false },
            { idx: 2, pokeid: "", filled: false },
            { idx: 3, pokeid: "", filled: false },
            { idx: 4, pokeid: "", filled: false },
            { idx: 5, pokeid: "", filled: false },
        ],
    },
    reducers: {
        addPokemon: (state, action) => {
            return state, action;
        },
        removePokemon: (state, action) => {
            return state, action;
        },
    },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
