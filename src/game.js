import { useState } from "react";

// prettier-ignore
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Game() {
    const [input, setInput] = useState("a");

    function readPressedKey(key) {
        if (key === "Backspace") {
            setInput(input.slice(0, -1));
            return;
        }

        if (key === "Enter" && input.length == 5) {
            alert("5 char long :)");
            return;
        }

        if (abc.includes(key) && input.length < 5) {
            setInput(input + key);
        }
    }

    return (
        <div
            onKeyDown={(e) => readPressedKey(e.key)}
            tabIndex="0"
            style={{ backgroundColor: "gray", height: "500px", width: "500px" }}
        >
            <h3>[{input}]</h3>
            <br />
            {abc.map((e) => {
                return <button onClick={() => readPressedKey(e)}>{e}</button>;
            })}
            <button
                onClick={() => {
                    readPressedKey("Backspace");
                }}
            >
                {"<-"}
            </button>
            <button
                onClick={() => {
                    readPressedKey("Enter");
                }}
            >
                {"Enter"}
            </button>
        </div>
    );
}
