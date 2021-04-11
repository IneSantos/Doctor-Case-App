import axios from "axios";
require('dotenv/config');
const apiURL = process.env.REACT_APP_API_URL;

export const userAuthentication = (username, password) => {
    const payload = {
        "email": username,
        "password": password
    }

    return axios.post(`${apiURL}/login`, payload)
    .then(function (response) {
        return response;
    })
    .catch(() => {
        return "Error trying to login";
    });
}