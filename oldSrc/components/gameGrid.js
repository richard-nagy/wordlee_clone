import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Grid, styled } from "@mui/material";
import textFile from "../words.txt";
import gameGrid from "./gameGrid";

const StyledTd = styled("td")(() => ({
    color: "white",
    border: "2px solid white",
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
}));

export default function GameGrid() {
    const [input, setInput] = useState("");
    const [guessWord, setGuessWord] = useState([]);
    const [wordColor, setWordColor] = useState([]);

    return (
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
                        return guessWord.length < 6 ? <StyledTd>{input.charAt(i)}</StyledTd> : null;
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
    );
}
