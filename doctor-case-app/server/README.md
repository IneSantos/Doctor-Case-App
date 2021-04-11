# Doctor-Case-App Backend

The backend was developed using NodeJs. And the database was developed using MogoDB. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. You can access the API in [http://localhost:3000](http://localhost:3000).

The server will reload if you make code edits.\
The server can be access from anywhere, since it was a cors policy, provided by [cors](https://www.npmjs.com/package/cors).


**NOTE:** 

In order to run this project there are 2 things you can't forget. First install all the dependencies, by runing npm install inside the server folder. Then add the <code>.env</code> file to the server folder. 
And finally execute <code>npm start</code>

### Code Splitting

The code was splitted in 4 folders. 

#### **data folder**

This folder containes all the resources used in the App. Namely the list of conditions and sample cases. The sample cases are inside a specific folder <code>./cases</code>.

#### **models**

This folder is where all the Schemas used in the mongoDB are detailed. If you open it you can see 2 files, the case schema and the user schema. These files specify the structure of this documents in the data base. 

#### **routes**

This folder agregates all the routes defined in this project. Each file contains the possible HTTP requests to that endpoint. For this project 3 main routes were created. 

- <code>auth.js</code>
    - Here is the login request

- <code>cases.js</code>
    - Here is the GET and POST requests for the cases to be presented

- <code>conditions.js</code>
    - Here is the GET request for the conditions to be presented



#### **utils**

This folder is a collection of useful functions. Since I load the files with the cases and the conditions, I used this folder to save my auxiliary functions. 

- <code>loadcases.js</code>
    - Here is the code used to load the cases form the cases folder

- <code>loadConditions.js</code>
    - Here is the code that reads the cvs file with the conditions

- <code>verifyJWT.js</code>
    - Here is the code used to verify the authentication token


Finally the <code>app.js</code> file is the main file where the connection to the database is established along the middlewares and the routes definitions.