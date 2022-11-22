import Tile from "./Tile";
import classes from "./Row.module.css";


const Row = (props) => {
  const charOfGussedWord = [...props.guess];
  const wordChar = [...props.word.toLowerCase()];

  let tileRow = [];
  for (let i = 0; i < props.word.length; i++) {
    let tClass = "";
    if (wordChar[i] === charOfGussedWord[i]) {
      tClass = "rightPlace";
    } else if (wordChar.includes(charOfGussedWord[i])) {
      tClass = "close";
    } else {
      tClass = "wrong";
    }
    if (charOfGussedWord[i] !== undefined) {
      tileRow.push(
        <Tile tileClass={tClass} key={i} gusChar={charOfGussedWord[i]} />
      );
    } else {
      tileRow.push(<Tile key={i} gusChar="" />);
    }
  }

  return <div className={classes.row}>{tileRow}</div>;
};

export default Row;
