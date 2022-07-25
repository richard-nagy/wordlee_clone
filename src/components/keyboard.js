import { memo, useState } from "react";

function Keyboard({ keyboardList, onKeyPress }) {
    return (
        <div>
            {keyboardList.map((e) => {
                return (
                    <button
                        onClick={() => {
                            onKeyPress(e);
                        }}
                    >
                        {e}
                    </button>
                );
            })}
        </div>
    );
}

export default memo(Keyboard);
