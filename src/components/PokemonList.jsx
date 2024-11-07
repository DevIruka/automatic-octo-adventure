import styled from "styled-components";
import PokemonCard from "./PokemonCard";

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

const PokemonList = () => {
    return (
        <StListWrapper>
            <PokeCardWrapper>
                <PokemonCard />
            </PokeCardWrapper>
        </StListWrapper>
    );
};
export default PokemonList;
