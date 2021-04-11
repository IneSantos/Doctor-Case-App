import React, {useState} from "react";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import './index.css';

const Login = ({onSuccLogin}) => { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
        event.preventDefault();
        const apiURL = process.env.REACT_APP_API_URL;
        const payload={
            "email": username,
            "password": password
        }

        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(payload), process.env.REACT_APP_SECRET).toString();
        axios.post(`${apiURL}/login`, {ciphertext})
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