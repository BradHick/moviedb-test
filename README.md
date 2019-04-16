

## Libs used on this project

1 - [Rematch](https://github.com/rematch/rematch?target=_blank)<br>
2 - [Styled-components](https://github.com/styled-components/styled-components)<br>
3 - [Seamless-immutable](https://github.com/rtfeldman/seamless-immutable)<br>
4 - [Moment](https://momentjs.com/)<br>
5 - [React-Redux](https://github.com/reduxjs/react-redux)<br>
6 - [Framework7](https://framework7.io)<br>
7 - [Jest](https://jestjs.io/)<br>
8 - [React](https://reactjs.org/)<br>


## After you clone this project's repository, run:

**`npm install`** <br>
To install all dependencies;
<br><br>
**`npm run test`** <br>
To run the tests;
<br><br>
**`expo start`** <br>
To init the application.<br>
<br>

## The project

This project connects to The Movie DB API and return a list of movies, where you can see each movie detail <br>

**FEATURES:**
* Show list of movies;
* See a particular movie and its details;
* infinity Scroll;


<br>


**TESTS:**
* Verify if fetch is fullfiled;
* Verify if movies list is beeing reseted;
* Verify if a movie is beeing reseted;
* Verify erros during fetch movies list;
* Verify erros during fetch an individual movie;


<br>

**OBSERVATIONS:**
* All the functions were implemented outside the class, aiming to keep them in the cache improving the performance instead of always recreating them when the class is instantiated;
* The `infinityScroll`function was implemented manually to avoid the unnecessary addition of external libs;
* The Rematch framework was chosen because it has several characteristics superior to redux, such as generated action creators, async	without middlewares, simple setup and so on. See more on [Comparing Redux & Rematch
](https://github.com/rematch/rematch/blob/master/docs/purpose.md);




















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
