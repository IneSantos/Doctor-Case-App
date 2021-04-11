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

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Code Splitting

The code was splitted in 3 folders. 

#### **api folder**

This folder containes all the calls to the api. For the cases to label, the conditions we can use to lable the ehr files and finally the login requests.

#### **components**

This folder is where all the components used in the project are defined. For this project I used a structure where we have pages and components. One for the case section, the conditions section, the nav bar on top and lastly a reviewCases component that is the combination of the the case section with the conditions and the lable button.

#### **pages**

This folder agregates the 2 pages of the app. The login Page and the Home page. 


Finally the <code>App.js</code> file is the main file where all the pages and the components are mounted. 
And also I would like to add that <code>public/index.html</code> is the page template; and <code>src/index.js</code> is the JavaScript entry point.