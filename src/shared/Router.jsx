import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

const Router = ({ pokeLists, setPokeLists }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/dex"
                    element={
                        <Dex
                            pokeLists={pokeLists}
                            setPokeLists={setPokeLists}
                        />
                    }
                />
                <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
