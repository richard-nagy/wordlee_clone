import { useEffect, useState } from "react";
import ArrayOfWords from "../utils/arrayOfWords";
import GridLine from "./gridLine";
import Keyboard from "./keyboard";

// prettier-ignore
const keyboardList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function GameGrid() {
    const [activeWord, setActiveWord] = useState("");
    const [allWords, setAllWords] = useState([]);
    const [incorrectWords, setIncorrectWords] = useState([]);

    useEffect(() => {
        ArrayOfWords().then((response) => {
            setAllWords(response);
        });
    }, []);

    function readKeyInput(key) {
        switch (key) {
            case "Backspace":
                setActiveWord(activeWord.slice(0, -1));
                break;
            case "Enter":
                if (activeWord.length === 5 && allWords.includes(activeWord.toLocaleLowerCase())) {
                    setIncorrectWords([...incorrectWords, activeWord]);
                    setActiveWord("");
                }
                break;
            default:
                if (keyboardList.includes(key.toUpperCase()) && activeWord.length < 5) {
                    setActiveWord(activeWord + key.toUpperCase());
                }
                break;
        }
    }

    document.body.onkeydown = (e) => {
        readKeyInput(e.key);
    };

    return (
        <div>
            <ul>
                {incorrectWords.map((word) => {
                    return <GridLine key={Math.random()} word={word} />;
                })}
                <GridLine word={activeWord} />
                {Array.from({ length: 5 - incorrectWords.length }).map(() => {
                    return <GridLine key={Math.random()} />;
                })}
            </ul>
        </div>
    );
}
