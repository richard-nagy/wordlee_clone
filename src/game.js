import { useState } from "react";

// prettier-ignore
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Game() {
    const [input, setInput] = useState("");

    function readPressedKey(key) {
        setInput(
            key != "Backspace" ? (abc.includes(key) ? input + key : input) : input.slice(0, -1)
        );
    }

    return (
        <div
            onKeyDown={(e) => readPressedKey(e.key)}
            tabIndex="0"
            style={{ backgroundColor: "gray", height: "500px", width: "500px" }}
        >
            <h3>[{input}]</h3>
        </div>
    );
}
