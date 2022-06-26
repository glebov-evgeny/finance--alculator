import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

import Main from "./pages/main"
import Test from "./pages/test"

function App() {
    return (
        <>
        <header className="header">
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link style={{margin: "0 5px"}} to="/">MAIN</Link>
                <Link style={{margin: "0 5px"}} to="/test">TEST</Link>

            </nav>
        </header>
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