import { CenterWrapper } from "../commonStyles/commonStyles";
import Dashboard from "../components/Dashboard";

const Dex = ({ pokeLists, setPokeLists }) => {
    return (
        <CenterWrapper>
            <Dashboard pokeLists={pokeLists} setPokeLists={setPokeLists} />
        </CenterWrapper>
    );
};
export default Dex;
