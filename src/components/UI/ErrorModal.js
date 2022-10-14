import classes from "./Error.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props =>
{
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
  );
}
function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onOkay}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onOkay}/>, document.getElementById('overlay-root'))}
    </>
  );
}

export default ErrorModal;
