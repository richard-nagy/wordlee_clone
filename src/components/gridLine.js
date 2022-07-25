import { memo } from "react";

function GridLine({ word = "" }) {
    return (
        <tr>
            {[...Array(5).keys()].map((e) => {
                return (
                    <>
                        <td style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                            {word.split("")[e]}
                        </td>
                    </>
                );
            })}
        </tr>
    );
}

export default memo(GridLine);
