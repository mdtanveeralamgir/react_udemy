import UserForm from "./components/user/userForm/UserForm";
import UserList from "./components/user/userList/UserList";
import {useState} from 'react';



function App() {

  const [users, setUsers] = useState([]);
  
  const onSubmitForm = (newUser) => 
  {


    const structuredUser = {
      id: newUser.id,
      value: newUser.name + '( ' + newUser.age + ' )',
    }
    setUsers((previous) => {
      
      return [structuredUser, ...previous];
    });
  }

  return (
    // Using fragment instead of div
    <>
      <UserForm saveUser={onSubmitForm}/>
      <UserList items={users} />
    </>
  );
}

export default App;
