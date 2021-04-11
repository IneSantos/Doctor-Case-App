import axios from "axios";
require('dotenv/config');
const apiURL = process.env.REACT_APP_API_URL;

export const getListOfCases = (authToken) => 
    axios.get(`${apiURL}/cases`, { 'headers': { 'x-access-token': authToken }})
    .then(function (response) {
        return response.data;
    }); 

    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzFlZDkwMWQ0MGYyMGM0NGI3NTdkZCIsImlhdCI6MTYxODE2MDYyOSwiZXhwIjoxNjE4MTYwOTI5fQ.ahTAikEKG_Mxg-WxFvDLSo3kNzveWrW9AwJhzS-6aYs