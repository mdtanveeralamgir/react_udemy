import { useEffect, useState } from "react";
import { WORDS } from "./WORDS";
import Row from "./Row";
import classes from "./main.module.css";
function App() {
  const [word, setWord] = useState("");
  // const [curGuessNum, setCurGuessNum] = useState(0);
  const [guesses, setGusses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }, []);

  useEffect(() => {
    const typeHandler = (event) => {
      if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (event.key === "Enter") {
        if (currentGuess.length !== word.length) {
          return;
        }

        if (word === currentGuess) {
          alert("Bingo");
          return;
        }
        setGusses((prev) => {
          let temp = [...prev];
          const nullIndex = temp.findIndex((val) => val == null);
          temp[nullIndex] = currentGuess;
          setCurrentGuess("");
          return temp;
        });
      } else {
        setCurrentGuess((prev) => {
          let temp = prev;

          if (temp.length < word.length) {
            temp = temp + event.key;
          }
          return temp;
        });
      }

      // if(currentGuess.length >= 5){
      //   return;
      // }
    };

    window.addEventListener("keydown", typeHandler);

    return () => window.removeEventListener("keydown", typeHandler);
  }, [currentGuess, word]);

  return (
    <div className={classes.board}>
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        return (
          <Row
            key={i}
            word={word}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
          />
        );
      })}
    </div>
  );
}

export default App;
