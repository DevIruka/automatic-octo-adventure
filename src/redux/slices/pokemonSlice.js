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
            let updated = false;
            state.pokeLists = state.pokeLists.map((pokeList) => {
                if (!updated && !pokeList.filled) {
                    updated = true;
                    return {
                        idx: pokeList.idx,
                        pokeid: action.payload,
                        filled: true,
                    };
                }
                return pokeList;
            });
            return state;
        },
        removePokemon: (state, action) => {
            state.pokeLists = state.pokeLists.map((pokeList) => {
                if (pokeList.idx === action.payload) {
                    return { ...pokeList, pokeid: "", filled: false };
                }
                return pokeList;
            });
            return state
        },
    },
});
export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
