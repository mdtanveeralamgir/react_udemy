import classes from './Error.module.css';

function ErrorModal(props) {
  return (
    <div>
    <div onClick={props.onOkay} className={classes.backdrop}></div>
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onOkay}>Okay</button>
      </footer>
    </div>
    </div>
  );
}

export default ErrorModal;
