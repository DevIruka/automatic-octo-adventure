import styled from "styled-components";

const StDashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    margin-top: 20px;
    border-radius: 15px;
`;

const StCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 1px transparent;
    border-radius: 15px;
    width: 95%;
    height: 150px;
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

const Dashboard = ({ pokeLists }) => {
    console.log(pokeLists);
    return (
        <>
            <StDashboardWrapper>
                나만의 포켓몬
                <StCardWrapper>
                    {pokeLists.map((pokeList) => {
                        return (
                            <StDashboardCard key={pokeList.id}>
                                <img
                                    src="src\assets\Pokebola-pokeball-png-0.png"
                                    alt="포켓볼 아이콘입니다."
                                    width={"50px"}
                                />
                            </StDashboardCard>
                        );
                    })}
                </StCardWrapper>
            </StDashboardWrapper>
        </>
    );
};
export default Dashboard;
