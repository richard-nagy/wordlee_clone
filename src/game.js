import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
            className="bg-dark"
            style={{ height: "500px", width: "600px" }}
        >
            <Row xs={1} md={5} className="g-1" style={{ width: "275px" }}>
                {Array.from({ length: 30 }).map((_, i) => (
                    <Col>
                        <Card
                            style={{ width: "50px", height: "50px" }}
                            className="border-primary bg-dark text-light"
                        >
                            {input.charAt(i, i + 1)}
                        </Card>
                    </Col>
                ))}
            </Row>

            <h3 style={{ color: "white", height: "40px" }}>{input}</h3>
            <br />
            <div style={{ width: "370px" }}>
                {abc.map((e) => {
                    return (
                        <Button
                            variant="secondary"
                            className="m-1 p-2"
                            onClick={() => readPressedKey(e)}
                        >
                            {e}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
