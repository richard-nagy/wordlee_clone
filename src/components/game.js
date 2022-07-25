// TODO: Background of website

import { useEffect, useState } from "react";
import GameGrid from "./gameGrid";
import Keyboard from "./keyboard";

export default function Game() {
    // TODO: Create React Context for letters and hidden word

    const [activeWord, setActiveWord] = useState("");

    return (
        <div style={{ margin: "10px", padding: "10px" }}>
            GAME
            <GameGrid activeWord={activeWord} />
        </div>
    );
}
