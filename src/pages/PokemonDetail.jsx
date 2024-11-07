import { useParams } from "react-router-dom";
import MOCK_DATA from "../assets/PokeData";

const PokemonDetail = () => {
    const param = useParams();
    
    const selectedData = MOCK_DATA.find((data) => {
        return data.id === +param.id;
    });

    return (
        <div>
            <img src={selectedData.img_url} alt="" />
            <span>{selectedData.korean_name}</span>
            <span>{selectedData.description}</span>
        </div>
    );
};
export default PokemonDetail;
