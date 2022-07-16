import { useState } from "react";

// prettier-ignore
const abc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S",
"D", "F", "G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    const [input, setInput] = useState("");

    function readPressedKey(key) {
        key = key.toUpperCase();

        if (key === "BACKSPACE" || key === "<-") {
            setInput(input.slice(0, -1));
            return;
        }

        if (key === "ENTER" && input.length == 5) {
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
            <h3 style={{ color: "white", height: "40px" }}>{input}</h3>
            <br />
            <div
                style={{
                    width: "260px",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {abc.map((e) => {
                    return <button onClick={() => readPressedKey(e)}>{e}</button>;
                })}
            </div>
        </div>
    );
}
