// TODO: Background of website

import readKeyInput from "../utils/readKeyInput";
import GameGrid from "./gameGrid";
import Keyboard from "./keyboard";

// prettier-ignore
const abc = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F",
"G", "H", "J", "K", "L", "Enter", "Z", "X", "C", "V", "B", "N", "M", "<-"];

export default function Game() {
    // TODO: Create React Context for letters and hidden word

    document.body.onkeydown = (e) => {
        readKeyInput(e.key);
    };

    return (
        <div>
            <GameGrid />
            <Keyboard />
        </div>
    );
}
