import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList,setusersList]=useState([]);
  const addUserHandler = (users) =>{
    console.log(users,"hello");
      setusersList((prevUsersList)=>{
        return [...prevUsersList,{name:users.username , age: users.age , id: Math.random().toString()}]

      })
  }
  console.log(usersList,"haha");
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
