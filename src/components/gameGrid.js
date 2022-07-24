// TODO: Create grid here

export default function Keyboard({ listOfWords }) {
    return (
        <div>
            <ul>
                {listOfWords.map((word) => {
                    return <li key={Math.random()}>{word}</li>;
                })}
            </ul>
        </div>
    );
}
