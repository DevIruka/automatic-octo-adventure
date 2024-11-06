import styled from "styled-components";

const StDashboardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const StDashboardCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    border: solid 3px black;
    margin: 5px;
`;

const Dashboard = ({ pokeLists, setPokeLists }) => {
    console.log(pokeLists);
    return (
        <>
            Dashboard
            <StDashboardWrapper>
                {pokeLists.map((pokeList) => {
                    return (
                        <StDashboardCard key={pokeList.id}>
                            {pokeList.id}
                        </StDashboardCard>
                    );
                })}
            </StDashboardWrapper>
        </>
    );
};
export default Dashboard;
