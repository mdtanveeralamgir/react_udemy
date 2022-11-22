import classes from "./Tile.module.css";

const Tile = (props) => {
  let tClass = classes.tile + " ";

  switch(props.tileClass){
    case "rightPlace":
      tClass = tClass + classes.rightPlace;
      break;
    case "close":
      tClass = tClass + classes.close;
      break;
    case "wrong":
      tClass = tClass + classes.wrong;
      break;
  }
  return <div className={tClass}>{props.gusChar}</div>;
};

export default Tile;
