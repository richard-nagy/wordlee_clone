import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, styled } from "@mui/material";

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
    const [guesses, setGuesses] = useState([]);

    function readPressedKey(key) {
        key = key.toUpperCase();

        if (key === "BACKSPACE" || key === "<-") {
            setInput(input.slice(0, -1));
            return;
        }

        if (key === "ENTER" && input.length === 5) {
            // alert("5 char long :)");
            setGuesses([...guesses, input]);
            setInput("");
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
            className="bg-dark"
            style={{ height: "700px", width: "700px" }}
        >
            <style type="text/css">
                {`
                .btn- {
                    background-color: purple;
                    color: white;
                }
                `}
            </style>

            <table style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                <tbody>
                    {guesses.map((e) => {
                        return (
                            <tr>
                                {e.split("").map((element) => {
                                    return <StyledTd>{element}</StyledTd>;
                                })}
                            </tr>
                        );
                    })}
                    <tr>
                        {Array.from({ length: 5 }).map((_, i) => {
                            return guesses.length < 5 ? (
                                <StyledTd>{input.charAt(i)}</StyledTd>
                            ) : null;
                        })}
                    </tr>
                    {Array.from({ length: 5 - guesses.length }).map((_, i) => (
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
                    {abc.map((e) => {
                        return (
                            <Grid item xs={1}>
                                <Button
                                    sx={{ color: "black", backgroundColor: "lightGray" }}
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
            {guesses.map((e) => {
                return e;
            })}
        </div>
    );
}
