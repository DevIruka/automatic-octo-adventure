import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./shared/Router";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: "Pokemon";
    src: url("/fonts/DungGeunMo.ttf") format("truetype");
}
body {
    background-color: white;
    font-family: "Pokemon";
}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer />
            <Router />
        </>
    );
}

export default App;
