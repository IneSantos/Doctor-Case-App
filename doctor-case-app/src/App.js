import React, {useState} from "react";
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import './App.css';

function App() {
  const [userLoggedIn, setUserLoggedin] = useState({});

  const successfulLogin = (user) => {
    setUserLoggedin(user);
  }

  return (
    <div className="App">
      { !userLoggedIn._id  ? <Login onSuccLogin={successfulLogin}/> : <Home user={userLoggedIn}/> }
    </div>
  );
}

export default App;
