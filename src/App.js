import React, { useState } from 'react';
import Card from './components/UI/Card/Card';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const newEnteredUser = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div className='App'>
      <Card>
        <AddUser onSaveUser={newEnteredUser} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
