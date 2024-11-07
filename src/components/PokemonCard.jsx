import styled from "styled-components";
import useSound from "use-sound";
import pokebeep from "../assets/pokebeep.mp3";
import MOCK_DATA from "../assets/PokeData";
import { useNavigate } from "react-router-dom";
import { SmallBeepButton } from "../commonStyles/commonStyles";

const PokeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    width: 180px;
    height: 270px;
    margin: 10px;
`;

const BeepPokeCard = ({ onClick, children }) => {
    const [play] = useSound(pokebeep);
    return (
        <PokeCard
            onClick={() => {
                play();
                onClick();
            }}
        >
            {children}
        </PokeCard>
    );
};

const addToEntry = (id, pokeLists, setPokeLists) => {
    const valueofPokeIdArray = [];
    const valueofFilledArray = [];
    for (const pokeList of pokeLists) {
        let valueofPokeId = Object.values(pokeList)[1];
        let valueofFilled = Object.values(pokeList)[2];
        valueofPokeIdArray.push(valueofPokeId);
        valueofFilledArray.push(valueofFilled);
    }
    if (valueofPokeIdArray.includes(id)) {
        alert("중복된 포켓몬을 선택하였습니다. 다른 포켓몬을 선택해주세요.");
        return;
    }
    if (!valueofFilledArray.includes(false)) {
        alert("배틀 엔트리가 꽉 찼습니다.");
        return;
    }
    let updated = false;
    const newPokeLists = pokeLists.map((pokeList) => {
        if (!updated && !pokeList.filled) {
            updated = true;
            return { idx: pokeList.idx, pokeid: id, filled: true };
        }
        return pokeList;
    });
    setPokeLists(newPokeLists);
};

const PokemonCard = ({ pokeLists, setPokeLists }) => {
    const nav = useNavigate();
    return MOCK_DATA.map((data) => {
        return (
            <BeepPokeCard
                key={data.id}
                onClick={() => {
                    nav(`/pokemon-detail/${data.id}`);
                }}
            >
                <img src={data.img_url} alt="포켓몬 이미지입니다." />
                <span>{data.korean_name}</span>
                <SmallBeepButton
                    onClick={() => {
                        addToEntry(data.id, pokeLists, setPokeLists);
                    }}
                >
                    추가
                </SmallBeepButton>
            </BeepPokeCard>
        );
    });
};
export default PokemonCard;
