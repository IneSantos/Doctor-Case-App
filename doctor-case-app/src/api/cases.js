import axios from "axios";
require('dotenv/config');
const apiURL = process.env;
console.log("SERVER_HOST", apiURL)

export const getListOfCases = () => 
    axios.get(`http://localhost:3000/cases`)
    .then(function (response) {
        return response.data;
    }); 