import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/PokeData";
import {
    BigBeepButton,
    CenterWrapper,
    HeightCenterWrapper,
} from "../commonStyles/commonStyles";
import styled from "styled-components";

const PokemonName = styled.span`
    font-family: "Pokemon";
    font-size: 30px;
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

    return (
        <HeightCenterWrapper>
            <CenterWrapper>
                <img
                    src={selectedData.img_url}
                    height={"300px"}
                    alt="포켓몬의 이미지입니다."
                />
                <PokemonName>{selectedData.korean_name}</PokemonName>
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
            </CenterWrapper>
        </HeightCenterWrapper>
    );
};
export default PokemonDetail;
