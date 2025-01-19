import React,{useState} from 'react';

const LoginForm =({isLoggedIn,setIsLoggedIn})=>{
  const [name,setName] = useState();
  const [password,setPassword] = useState();

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(name && password){
      setIsLoggedIn(true);
    }
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <label>Username :<input type="text" onChange={(e) => setName(e.target.value)}/></label>
      <label>Password :<input type="password" onChange={(e) => setPassword(e.target.value)}/></label>
      <button type="submit">Login</button>
    </form>
  );
}
