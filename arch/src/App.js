// import { initializeApp } from "firebase/app";

import {
    Routes,
    Route,
} from "react-router-dom";
// import { Header } from "./components/header/header";
import Main from "./pages/main"


function App() {
    return (
        <>
        {/*<Header/>*/}
            <Routes>
                <Route  exact path="/"  element={<Main />} />
            </Routes>
        </>
    );
}

export default App;