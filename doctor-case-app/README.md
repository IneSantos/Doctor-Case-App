# Doctor-Case-App Frontend

The frontend was developed using ReactJS. And it was initialized using [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser. Since 3000 is being used by the API this will have to run in 3001. (you can configure the <code>.env</code> file inside server folder to configure this.)

The page will reload if you make edits.\
You will also see any lint errors in the console.

**NOTE:** 

In order to run this project there are 2 things you can't forget. First install all the dependencies, by runing  <code>npm install</code> inside the soctor-case-app folder. Then add the <code>.env</code> file to the src folder. 
And finally execute <code>npm start</code>

### Code Structure

The code was splitted in 3 folders. 

#### **api folder**

This folder containes all the calls to the api. For the cases to label, the conditions we can use to lable the ehr files and finally the login requests.

#### **components**

This folder is where all the components used in the project are defined. For this project I used a structure where we have pages and components. One for the case section, the conditions section, the nav bar on top and lastly a reviewCases component that is the combination of the the case section with the conditions and the lable button.

#### **pages**

This folder agregates the 2 pages of the app. The login Page and the Home page. 


Finally the <code>App.js</code> file is the main file where all the pages and the components are mounted. 
And also I would like to add that <code>public/index.html</code> is the page template; and <code>src/index.js</code> is the JavaScript entry point.