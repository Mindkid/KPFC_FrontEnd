import './App.css';
import { useState } from 'react';
import { Form, Button, Accordion } from "react-bootstrap";
import {retireveUsers} from './communication/backend'
import Login from './components/Login';
import User from './components/User';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState()
  const [users, setUsers] = useState([])

  const handleSubmit = async e => {
      e.preventDefault();
      setUsers(await retireveUsers({
          email
      }));
  }

  if (!isLogin) {
    return <Login setIsLogin={setIsLogin} />
  }

  return (
    <div className="App">
      <div class="logoutButton">
        <Button  onClick={() => setIsLogin(false)}>Logout</Button>
      </div>
      <header className="App-header">
      <div className='postMural'>
            <Form className='loginForm' onSubmit={handleSubmit}>
                <div class="form-group">                    
                    <label  for="userEmail">Email to search:  </label>
                    <div className='userSearchButtonContainer'>
                        <input className='form-control' type="email" name="userEmail" placehoholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <Button type='submit'>Search</Button>
                </div>
            </Form>
            <Accordion >
                {users.map((user, index) => (
                    <User user={user} id={index} />
                ))}
            </Accordion>
        </div>
      </header>
    </div>
  );
}

export default App;
