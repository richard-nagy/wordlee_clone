import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Grid, styled } from "@mui/material";
import textFile from "./words.txt";

const StyledTd = styled("td")(() => ({
    color: "white",
    border: "2px solid white",
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
}));

// prettier-ignore
const abc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    const [input, setInput] = useState("");
    const [guessWord, setGuessWord] = useState([]);
    const [wordColor, setWordColor] = useState([]);
    const [abcColor, setAbcColor] = useState({});
    const [listOfWords, setListOfWords] = useState();
    const [word, setWord] = useState();

    useEffect(() => {
        fetch(textFile)
            .then((r) => r.text())
            .then((text) => {
                const words = text.split(/[\n\r]+/);

                setListOfWords(words);
                setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
            });
    }, []);

    console.log(word);

    function readPressedKey(key) {
        key = key.toUpperCase();

        // If we press backspace remoe last letter
        if (key === "BACKSPACE" || key === "<-") {
            setInput(input.slice(0, -1));
            return;
        }

        // If we have 5 letters and press enter
        if (key === "ENTER" && input.length === 5) {
            if (word === input) {
                alert("You winn!");
                return;
            }

            if (!listOfWords.includes(input.toLowerCase())) {
                return;
            }

            // Count letters
            let countedLetters = {};
            word.split("").forEach((e) => {
                if (!countedLetters[e]) {
                    countedLetters[e] = 1;
                } else {
                    countedLetters[e] += 1;
                }
            });

            const wordColors = [];
            const abcColors = {};

            // MArk  matching letters
            input.split("").forEach((e, i) => {
                if (word.split("")[i] === e) {
                    wordColors.push("green");
                    countedLetters[e] -= 1;
                    abcColors[e] = "green";
                    return;
                }

                wordColors.push("gray");
                if (abcColors[e] !== "green") {
                    abcColors[e] = "gray";
                }
            });

            // Mark missplaced letters
            input.split("").forEach((e, i) => {
                if (
                    word.split("").includes(e) &&
                    wordColors[i] === "gray" &&
                    countedLetters[e] > 0
                ) {
                    wordColors[i] = "orange";
                    abcColors[e] = "orange";
                    countedLetters[e] -= 1;
                }
            });

            setWordColor([...wordColor, wordColors]);
            setAbcColor({ ...abcColor, ...abcColors });
            setGuessWord([...guessWord, input]);
            setInput("");
            return;
        }

        // Check if we entered a letter from the list
        if (abc.includes(key) && input.length < 5) {
            setInput(input + key);
        }
    }

    document.body.onkeydown = (e) => {
        readPressedKey(e.key);
    };

    return (
        <div
            // onKeyDown={(e) => readPressedKey(e.key)}
            tabIndex="0"
            className="bg-dark"
            style={{ height: "700px", width: "700px" }}
        >
            <table style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                <tbody>
                    {guessWord.map((element, i0) => {
                        return (
                            <tr>
                                {element.split("").map((e, i) => {
                                    return (
                                        <StyledTd style={{ backgroundColor: wordColor[i0][i] }}>
                                            {e}
                                        </StyledTd>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    <tr>
                        {Array.from({ length: 5 }).map((_, i) => {
                            return guessWord.length < 6 ? (
                                <StyledTd>{input.charAt(i)}</StyledTd>
                            ) : null;
                        })}
                    </tr>
                    {Array.from({ length: 5 - guessWord.length }).map((_, i) => (
                        <tr>
                            <StyledTd></StyledTd>
                            <StyledTd></StyledTd>
                            <StyledTd></StyledTd>
                            <StyledTd></StyledTd>
                            <StyledTd></StyledTd>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <div style={{ width: "370px" }}>
                <Grid container columnSpacing={10} rowSpacing={1}>
                    {abc.map((e, i) => {
                        return (
                            <Grid item xs={1}>
                                <Button
                                    sx={{
                                        color: "black",
                                        backgroundColor: abcColor[e] ? abcColor[e] : "lightGray",
                                    }}
                                    variant="contained"
                                    onClick={() => readPressedKey(e)}
                                >
                                    {e}
                                </Button>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            {guessWord.map((e) => {
                return e;
            })}
        </div>
    );
}
