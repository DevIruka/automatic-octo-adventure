import styled from "styled-components";
import MOCK_DATA from "../assets/PokeData";

const StListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    width: 85%;
`;

const PokeCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: solid 1px transparent;
    border-radius: 15px;
    width: 95%;
`;

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

const AddBtn = styled.button`
    width: 50px;
    height: 35px;
    margin-top: 10px;
    background-color: red;
    color: white;
    border: solid 1px;
    border-radius: 8px;
    font-size: 17px;
    transition: 0.5s;
    &:hover {
        background-color: #f5a9a9;
        transition: 0.5s;
    }
    font-family: "Pokemon";
`;

const PokemonList = () => {
    return (
        <StListWrapper>
            <PokeCardWrapper>
                {MOCK_DATA.map((data) => {
                    return (
                        <PokeCard key={data.id}>
                            <img
                                src={data.img_url}
                                alt="포켓몬 이미지입니다."
                            />
                            <span>{data.korean_name}</span>
                            <AddBtn>추가</AddBtn>
                        </PokeCard>
                    );
                })}
            </PokeCardWrapper>
        </StListWrapper>
    );
};
export default PokemonList;
