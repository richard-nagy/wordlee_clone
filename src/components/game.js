import { elementTypeAcceptingRef } from "@mui/utils";
import { useEffect, useState } from "react";
import ArrayOfWords from "../utils/arrayOfWords";
import GridLine from "./gridLine";
import Keyboard from "./keyboard";

// prettier-ignore
const keyboardList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    const [activeWord, setActiveWord] = useState("");
    const [allWords, setAllWords] = useState([]);
    const [incorrectWords, setIncorrectWords] = useState([]);
    const [secretWord, setSecretWord] = useState();

    useEffect(() => {
        ArrayOfWords().then((response) => {
            setAllWords(response);
            setSecretWord(response[Math.floor(Math.random() * response.length)]);
        });
    }, []);

    function readKeyInput(key) {
        switch (key) {
            case "Backspace":
                setActiveWord(activeWord.slice(0, -1));
                break;
            case "Enter":
                if (activeWord.toLowerCase() === secretWord) {
                    alert("you winn");
                    break;
                }
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
        <div style={{ margin: "10px", padding: "10px" }}>
            {secretWord}
            <table>
                <tbody>
                    {incorrectWords.map((word) => {
                        return <GridLine key={Math.random()} word={word} />;
                    })}
                    <GridLine word={activeWord} />
                    {Array.from({ length: 5 - incorrectWords.length }).map(() => {
                        return <GridLine key={Math.random()} />;
                    })}
                </tbody>
            </table>
            <Keyboard keyboardList={keyboardList} onKeyPress={readKeyInput} />
        </div>
    );
}
