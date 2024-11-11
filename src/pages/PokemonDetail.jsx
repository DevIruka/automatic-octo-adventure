import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/PokeData";
import {
    BigBeepButton,
    CenterWrapper,
    HeightCenterWrapper,
    notifyFullEntry,
    notifyNoPokemon,
    notifySamePokemon,
    notifySuccessRegistration,
    notifySuccessRemove,
} from "../commonStyles/commonStyles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
    addPokemon,
    removePokemonFromDetail,
} from "../redux/slices/pokemonSlice";

const PokemonName = styled.span`
    font-family: "Pokemon";
    font-size: 30px;
`;

const PokemonId = styled.span`
    font-family: "Pokemon";
    font-size: 30px;
    margin-top: 10px;
`;

const PokemonDescription = styled.span`
    font-family: "Pokemon";
    font-size: 20px;
    margin: 25px;
`;

const PokemonDetail = () => {
    const param = useParams();
    const nav = useNavigate();
    const selectedData = MOCK_DATA.find((data) => {
        return data.id === +param.id;
    });

    const dispatch = useDispatch();
    const pokeLists = useSelector((state) => state.pokemon.pokeLists);

    const addToEntry = (id, pokeLists) => {
        const valueofPokeIdArray = [];
        const valueofFilledArray = [];
        for (const pokeList of pokeLists) {
            let valueofPokeId = Object.values(pokeList)[1];
            let valueofFilled = Object.values(pokeList)[2];
            valueofPokeIdArray.push(valueofPokeId);
            valueofFilledArray.push(valueofFilled);
        }
        if (!valueofFilledArray.includes(false)) {
            notifyFullEntry();
            return;
        }
        if (valueofPokeIdArray.includes(id)) {
            notifySamePokemon();
            return;
        }
        dispatch(addPokemon(id));
        notifySuccessRegistration();
    };

    const deleteFromEntry = (idx) => {
        const pokeIdArray = [];
        for (let i = 0; i < pokeLists.length; i++) {
            pokeIdArray.push(pokeLists[i].pokeid);
        }
        if (!pokeIdArray.includes(idx)) {
            notifyNoPokemon();
            return;
        }
        dispatch(removePokemonFromDetail(idx));
        notifySuccessRemove();
    };

    return (
        <HeightCenterWrapper>
            <CenterWrapper>
                <img
                    src={selectedData.img_url}
                    height={"300px"}
                    alt="포켓몬의 이미지입니다."
                />
                <PokemonName>{selectedData.korean_name}</PokemonName>
                <PokemonId>No : {selectedData.id}</PokemonId>
                <PokemonId>타입 : {selectedData.types}</PokemonId>
                <PokemonDescription>
                    {selectedData.description}
                </PokemonDescription>
                <BigBeepButton
                    onClick={() => {
                        nav("/dex");
                    }}
                >
                    돌아가기
                </BigBeepButton>
                <BigBeepButton
                    onClick={() => {
                        addToEntry(selectedData.id, pokeLists);
                    }}
                >
                    엔트리에 등록
                </BigBeepButton>
                <BigBeepButton
                    onClick={() => {
                        deleteFromEntry(selectedData.id);
                    }}
                >
                    엔트리에서 빼기
                </BigBeepButton>
            </CenterWrapper>
        </HeightCenterWrapper>
    );
};
export default PokemonDetail;
