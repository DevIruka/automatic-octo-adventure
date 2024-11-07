import styled from "styled-components";
import MOCK_DATA from "../assets/PokeData";
import { SmallBeepButton } from "../commonStyles/commonStyles";

const StDashboardWrapper = styled.div`
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

const StCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 1px transparent;
    border-radius: 15px;
    max-height: 40%;
`;

const StDashboardCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: dotted 3px black;
    margin: 35px;
    width: 100px;
    height: 100px;
`;

const MyPokemonTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 20px;
`;

const PokeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    width: 140px;
    height: 270px;
    margin: 10px;
`;

const Dashboard = ({ pokeLists, setPokeLists }) => {
    const deleteFromEntry = (idx) => {
        const newPokeLists = pokeLists.map((pokeList) => {
            if (pokeList.idx === idx) {
                return { ...pokeList, pokeid: "", filled: false };
            }
            return pokeList;
        });
        setPokeLists(newPokeLists);
    };

    return (
        <>
            <StDashboardWrapper>
                <MyPokemonTitle>배틀 엔트리</MyPokemonTitle>
                <StCardWrapper>
                    {pokeLists.map((pokeList) => {
                        if (pokeList.filled === false) {
                            return (
                                <StDashboardCard key={pokeList.idx}>
                                    <img
                                        src="src\assets\Pokebola-pokeball-png-0.png"
                                        alt="포켓볼 아이콘입니다."
                                        width={"50px"}
                                    />
                                </StDashboardCard>
                            );
                        }
                        if (pokeList.filled === true) {
                            const cardData = MOCK_DATA.find((data) => {
                                return data.id === pokeList.pokeid;
                            });
                            return (
                                <PokeCard key={pokeList.idx}>
                                    <img src={cardData.img_url} alt="" />
                                    <span>{cardData.korean_name}</span>
                                    <SmallBeepButton
                                        onClick={() => {
                                            deleteFromEntry(pokeList.idx);
                                        }}
                                    >
                                        제거
                                    </SmallBeepButton>
                                </PokeCard>
                            );
                        }
                    })}
                </StCardWrapper>
            </StDashboardWrapper>
        </>
    );
};
export default Dashboard;
