// TODO: Background of website

import GameGrid from "./gameGrid";
import Keyboard from "./keyboard";

// prettier-ignore
const abc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    return (
        <div>
            <GameGrid />
            <Keyboard />
        </div>
    );
}
