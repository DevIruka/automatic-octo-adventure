import styled from "styled-components";
import useSound from "use-sound";
import pokebeep from "../assets/pokebeep.mp3";

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pokemon";
`;

const BeepButton = () => {
    const [play] = useSound(pokebeep);
    return <button onClick={play}></button>;
};

export { CenterWrapper, BeepButton };
