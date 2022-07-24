import textFile from "../words.txt";

// Return an array of 5 letter words
export default function ArrayOfWords() {
    return fetch(textFile)
        .then((r) => r.text())
        .then((text) => {
            const words = text.split(/[\n\r]+/);
            return words;
        });
}
