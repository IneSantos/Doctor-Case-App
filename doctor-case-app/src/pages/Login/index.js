import React, {useState} from "react";
import {userAuthentication} from '../../api/login';
import './index.css';

const Login = ({onSuccLogin}) => { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
        event.preventDefault();

        userAuthentication(username, password)
            .then(function (response) {
                if(response.status === 200){
                    onSuccLogin(response.data);
                }
                else if(response.status === 204){
                    alert("username password do not match")
                }
                else{
                    alert("Username or password does not exist");
                }
            })
            .catch(() => {
                alert("Error trying to login");
            });
    }

    return (
      <form onSubmit={handleSubmit}>
        <h3>Welcome, please sign in :)</h3>
        <input type="email" placeholder="enter you email" value={username}  onChange={(e) => setUsername(e.target.value)} required/> 
        <input type="password"  placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Login" />
      </form>
    );
}
export default Login;