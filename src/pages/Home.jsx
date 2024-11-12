import { useNavigate } from "react-router-dom";
import {
    BigBeepButton,
    CenterWrapper,
    HeightCenterWrapper,
} from "../commonStyles/commonStyles";
import Pokedexlogo from "../assets/Pokedexlogo.png";

const Home = () => {
    const nav = useNavigate();
    return (
        <HeightCenterWrapper>
            <CenterWrapper>
                <img src={Pokedexlogo} alt="포켓 덱스 로고" height={"250px"} />
                <BigBeepButton
                    onClick={() => {
                        nav("/dex");
                    }}
                >
                    포켓 덱스 시작
                </BigBeepButton>
            </CenterWrapper>
        </HeightCenterWrapper>
    );
};
export default Home;
