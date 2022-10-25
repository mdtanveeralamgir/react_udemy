import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {

  //will unmount the user when hide the list
  componentWillUnmount() {
    console.log("User will unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {};

export default User;
