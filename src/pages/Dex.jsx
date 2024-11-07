import { CenterWrapper } from "../commonStyles/commonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = ({ pokeLists, setPokeLists }) => {
    return (
        <CenterWrapper>
            <Dashboard pokeLists={pokeLists} setPokeLists={setPokeLists} />
            <PokemonList />
        </CenterWrapper>
    );
};
export default Dex;
