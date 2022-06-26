import {
    Routes,
    Route,
} from "react-router-dom";

import { Header } from "./components/header/header";
import Main from "./pages/main"
import Test from "./pages/test"

function App() {
    return (
        <>
        <Header/>
        <main className="main">
            <Routes>
                <Route  exact path="/"  element={<Main />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </main>
        </>
    );
}

export default App;