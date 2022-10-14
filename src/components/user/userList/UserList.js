import UserListItem from "./UserListItem";

function UserList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <UserListItem key={item.id} value={item.value} />
      ))}
    </ul>
  );
}

export default UserList;
