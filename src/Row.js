import Tile from "./Tile";
import classes from "./Row.module.css";

const Row = (props) => {
  let tileRow = [];
  for (let i = 0; i < props.wordLength; i++) {
    tileRow.push(<Tile key={i} />);
  }
  return <div className={classes.row}> {tileRow} </div>;
};

export default Row;
