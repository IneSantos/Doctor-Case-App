import React, {useState} from "react";
import axios from 'axios';
import './index.css';

const Login = ({onSuccLogin}) => { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
        event.preventDefault();
        const apiUrl = "http://localhost:3000/login";
        const payload={
        "email": username,
        "password": password
        }
        axios.post(apiUrl, payload)
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
            .catch(function (error) {
                alert("Error trying to login");
            });
    }

    return (
      <form onSubmit={handleSubmit}>
        <h3>Welcome, please sign in</h3>
        <input type="text" placeholder="enter you email" value={username}  onChange={(e) => setUsername(e.target.value)} required/> 
        <input type="password"  placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Login" />
      </form>
    );
}
export default Login;