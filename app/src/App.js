import './App.css';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import Login from './components/Login';
import Users from './components/Users';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  if (!isLogin) {
    return <Login setIsLogin={setIsLogin} />
  }

  return (
    <div className="App">
      <div class="logoutButton">
        <Button  onClick={() => setIsLogin(false)}>Logout</Button>
      </div>
      <header className="App-header">
        <Users />  
      </header>
    </div>
  );
}

export default App;
