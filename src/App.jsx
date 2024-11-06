import { useState } from "react";
import Router from "./shared/Router";

function App() {
    const [pokeLists, setPokeLists] = useState([
        { id: 1, pokeid: 0, pokeName: "" },
        { id: 2, pokeid: 0, pokeName: "" },
        { id: 3, pokeid: 0, pokeName: "" },
        { id: 4, pokeid: 0, pokeName: "" },
        { id: 5, pokeid: 0, pokeName: "" },
        { id: 6, pokeid: 0, pokeName: "" },
    ]);
    return <Router pokeLists={pokeLists} setPokeLists={setPokeLists} />;
}

export default App;
