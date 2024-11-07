import { CenterWrapper } from "../commonStyles/commonStyles";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
    return (
        <CenterWrapper>
            <Dashboard />
            <PokemonList />
        </CenterWrapper>
    );
};
export default Dex;
