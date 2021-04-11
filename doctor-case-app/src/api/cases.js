import axios from "axios";
require('dotenv/config');
const apiURL = process.env.REACT_APP_API_URL;

export const getListOfCases = (authToken) => 
    axios.get(`${apiURL}/cases`, { 'headers': { 'x-access-token': authToken }})
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });


export const submitCaseLabel = (authToken, caseId, description, codeId, userId) => {
    const reqBody = {
        caseId: caseId,
        description: description,
        codeId: codeId,
        userId: userId
    }
   return  axios.post(
            `${apiURL}/cases`, 
            reqBody, 
            { 'headers': { 'x-access-token': authToken }}
        )
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}