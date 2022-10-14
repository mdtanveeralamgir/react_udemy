import UserForm from "./components/user/userForm/UserForm";
import UserList from "./components/user/userList/UserList";
import {useState} from 'react';



function App() {

  const [users, setUsers] = useState([]);
  
  const onSubmitForm = (newUser) => 
  {
    if(newUser.name === '' || newUser.age === '')
    {
      alert("please fill out all the fileds!");
      return;
    }
    if(newUser.age < 0)
    {
      alert("age must be a positive number");
      return;
    }

    const structuredUser = {
      id: newUser.id,
      value: newUser.name + '( ' + newUser.age + ' )',
    }
    setUsers((previous) => {
      
      return [structuredUser, ...previous];
    });
  }

  return (
    <div>
      <UserForm saveUser={onSubmitForm}/>
      <UserList items={users} />
    </div>
  );
}

export default App;
