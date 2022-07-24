import ArrayOfWords from "./arrayOfWords";

export default function readKeyInput(key) {
    ArrayOfWords().then((response) => console.log(response));

    switch (key) {
        case "Backspace":
            alert("Backspace");
            break;
        case "Enter":
            alert("Enter");
            break;
        case [].includes(key):
            alert(key);
            break;
        default:
            alert(key);
            break;
    }
}
