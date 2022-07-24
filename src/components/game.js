// TODO: Background of website

import { useEffect, useState } from "react";
import GameGrid from "./gameGrid";
import Keyboard from "./keyboard";
import ArrayOfWords from "../utils/arrayOfWords";

// prettier-ignore
const keyboardList = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    // TODO: Create React Context for letters and hidden word

    const [activeWord, setActiveWord] = useState("");
    const [listOfWords, setListOfWords] = useState([]);

    useEffect(() => {
        ArrayOfWords().then((response) => {
            setListOfWords(response);
        });
    }, []);

    function readKeyInput(key) {
        switch (key) {
            case "Backspace":
                setActiveWord(activeWord.slice(0, -1));
                break;
            case "Enter":
                if (
                    activeWord.length === 5 &&
                    listOfWords.includes(activeWord.toLocaleLowerCase())
                ) {
                    alert("good");
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
            <GameGrid listOfWords={["a", "b", "c", "d"]} />
            {activeWord}
            <Keyboard />
        </div>
    );
}
