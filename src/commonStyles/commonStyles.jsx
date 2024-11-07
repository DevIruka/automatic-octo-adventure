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

const StBtn = styled.button`
    width: 170px;
    height: 50px;
    margin-top: 10px;
    background-color: red;
    color: white;
    border: solid 1px;
    border-radius: 8px;
    font-size: 20px;
    transition: 0.5s;
    &:hover {
        background-color: #f5a9a9;
        transition: 0.5s;
    }
    font-family: "Pokemon";
`;

const BigBeepButton = ({ onClick, children }) => {
    const [play] = useSound(pokebeep);
    return (
        <StBtn
            onClick={() => {
                play();
                onClick();
            }}
        >
            {children}
        </StBtn>
    );
};


export { CenterWrapper, StBtn, BigBeepButton };
