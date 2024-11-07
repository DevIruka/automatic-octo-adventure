import { useState } from "react";
import Router from "./shared/Router";

function App() {
    const [pokeLists, setPokeLists] = useState([
        { idx: 0, pokeid: "", filled: false },
        { idx: 1, pokeid: "", filled: false },
        { idx: 2, pokeid: "", filled: false },
        { idx: 3, pokeid: "", filled: false },
        { idx: 4, pokeid: "", filled: false },
        { idx: 5, pokeid: "", filled: false },
    ]);
    return <Router pokeLists={pokeLists} setPokeLists={setPokeLists} />;
}

export default App;
