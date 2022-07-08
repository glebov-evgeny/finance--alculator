import { Loader } from "../components/loader/Loader";
import { Intro } from "../components/intro/Intro";
import {useState, useEffect} from "react";

export default function Main() {
    const [loading, setLoading] = useState(false);
    const delay = 5.5;

    useEffect(
        () => {
            let timeoutFunction = setTimeout(() => setLoading(true), delay * 1000);
            return () => {
                clearTimeout(timeoutFunction);
            };
        },
        []
    );

    return (
        <main className="main">
            {loading ? (
                <Intro/>
            ) : <Loader/>}

        </main>
    );
}