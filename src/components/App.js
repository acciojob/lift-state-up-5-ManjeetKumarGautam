
import React,{useState} from "react";
import './../styles/App.css';
import LoginForm from './LoginForm'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      {
        isLoggedIn?
          <p>You are logged in !</p>:
          <LoginForm setIsLoggedIn={setIsLoggedIn}>
      }
    </div>
  )
}

export default App
