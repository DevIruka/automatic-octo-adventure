import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CenterWrapper, HeightCenterWrapper } from "../commonStyles/commonStyles";
import useSound from "use-sound";
import pokebeep from "../assets/pokebeep.mp3";

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
        cursor: pointer;
    }
    font-family: "Pokemon";
`;

const BeepButton = ({ onClick, children }) => {
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

const Home = () => {
    const nav = useNavigate();
    return (
        <HeightCenterWrapper>
            <CenterWrapper>
                <img
                    src="src\assets\Pokédex_logo.png"
                    alt="포켓 덱스 로고"
                    height={"250px"}
                />
                <BeepButton
                    onClick={() => {
                        nav("/dex");
                    }}
                >
                    포켓 덱스 시작
                </BeepButton>
            </CenterWrapper>
        </HeightCenterWrapper>
    );
};
export default Home;
