import { useEffect, useState } from "react";
import { WORDS } from "./WORDS";
import Row from "./Row";
function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }, []);

  let board = [];
  for(let i = 0; i < 6; i++){
    board.push(<Row key={i} wordLength={5}/>);
  }
  return (
    <div>
      {board}
    </div>
  );
}

export default App;
