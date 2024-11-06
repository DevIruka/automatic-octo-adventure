import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StHomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
`;

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

const Home = () => {
    const nav = useNavigate();
    return (
        <StHomeWrapper>
            <CenterWrapper>
                <img
                    src="src\assets\Pokédex_logo.png"
                    alt="포켓 덱스 로고"
                    height={"250px"}
                />
                <StBtn
                    onClick={() => {
                        nav("/dex");
                    }}
                >
                    포켓 덱스 시작
                </StBtn>
            </CenterWrapper>
        </StHomeWrapper>
    );
};
export default Home;
