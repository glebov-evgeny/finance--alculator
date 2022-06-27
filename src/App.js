import { initializeApp } from "firebase/app";
import {
    Routes,
    Route,
} from "react-router-dom";
import { Header } from "./components/header/header";
import Main from "./pages/main"
import Test from "./pages/test"

// eslint-disable-next-line
const firebase = initializeApp(
    {
        apiKey: "AIzaSyAzaKKgTIo_f-pjtYQmMKhFcbD6GCUpGE8",
        authDomain: "finance-calculator-8d18a.firebaseapp.com",
        projectId: "finance-calculator-8d18a",
        storageBucket: "finance-calculator-8d18a.appspot.com",
        messagingSenderId: "275030801411",
        appId: "1:275030801411:web:6af035b5c471c1282be236"
    }
);

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