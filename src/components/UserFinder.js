import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";

import Users from "./Users";


class UserFinder extends Component {
    //This way only one context can be initialized
    // If there is more than one context needed then need to use userContext.provider
    static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //This does not need any check of previous vs current state becasue this will run only once
  //This will run only once during the mount
componentDidMount(){
    //Send HTTP request...
    this.setState({filteredUsers: this.context.users});
}
  //This will update everytime the state is changed and UserFinder class re-evaluated
  //without checking "prevState.searchTerm !== this.state.searchTerm" will create an infinite loop
  //Because everytime filteredUsers change it will re-render the UserFinder and will cause to change the filteredUsers again
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
        // its possible to use userContext.consumer wrap around the jsx
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
