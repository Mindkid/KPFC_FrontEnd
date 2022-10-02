import './App.css';
import { useState } from 'react';
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
        <button  onClick={() => setIsLogin(false)}>Logout</button>
      </div>
      <header className="App-header">
        <Users />  
      </header>
      
      
    </div>
  );
}

export default App;
