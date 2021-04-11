import axios from "axios";
require('dotenv/config');
const apiURL = process.env.REACT_APP_API_URL;

export const getListOfConditions = (authToken) => 
    axios.get(`${apiURL}/conditions`, { 'headers': { 'x-access-token': authToken } })
    .then(function (response) {
        return response.data;
    }); 