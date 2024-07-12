# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Repository

### Clone the repository

```bash
git clone git@github.com:Watermelon9731/skipli-testing.git
cd skipli-testing
```

### Install dependencies

```bash
yarn install
```

### Set up environment variables

```bash
FAST_REFRESH=false
CHOKIDAR_USEPOLLING=true
REACT_APP_BASE_URL=http://localhost:5000
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Libraries Used

### `React Router`

Declarative routing for React applications.

Learn more at [React Router documentation](https://reactrouter.com/en/main).

### `Axios`

Promise-based HTTP client for the browser and Node.js.

Learn more at [Axios GitHub repository](https://github.com/axios/axios).

### `Material-UI (MUI)`

React components that implement Google's Material Design.

Learn more at [Material-UI documentation](https://mui.com).

## Folder Structure Explanation

```css
skipli-testing/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── dataTable.ts
│   │   └── informationCart.ts
│   ├── pages/
│   │   ├── layout.tsx
│   │   ├── home.tsx
│   │   ├── data.tsx
│   │   ├── githubUser.tsx
│   │   └── profile.tsx
│   ├── config/
│   │   └── axios.config.ts
│   ├── services/
│   │   ├── login.service.ts
│   │   ├── user.service.ts
│   │   └── github.service.ts
│   ├── utils/
│   │   ├── api/
│   │   │   ├── login.ts
│   │   │   ├── user.ts
│   │   │   └── github.ts
│   │   ├── constants/
│   │   │   └── user.ts
│   │   ├── helpers/
│   │   │   └── verifyLogin.ts
│   │   └── interfaces/
│   │       ├── login.ts
│   │       ├── user.ts
│   │       └── github.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── App.css
├── package.json
├── README.md
└── yarn.lock
```

### `public/`

Contains the index.html file which is the entry point for the React application.

Other static assets like favicon.ico can also be placed here.

### `src/`

1. `components/`

   Contains reusable UI components.

2. `pages/`

   Represents different pages/routes of the application.

3. `services/`

   Contains files for interacting with external services or APIs.

4. `src/interfaces/`

   Contains TypeScript interfaces (or JavaScript objects) used to define data structures or contracts for API responses, state management, etc.

5. `src/utils/`

   Holds utility functions that perform common tasks across the application.

6. `App.js`

   The main component where routing is typically defined using React Router.

7. `index.js`

   The entry point of the application where React is rendered into the DOM.

8. `App.css`

   Application-wide CSS styles.

### `package.json`

Configuration file for Yarn/npm dependencies and scripts.

Lists all dependencies used in the project.

### `README.md`

Documentation file that provides information about the project, how to install it, and how to use it.

Contains additional information about libraries used, project structure, and setup instructions.

### `yarn.lock`

Automatically generated by Yarn to ensure deterministic dependency resolution.

Records the exact versions of dependencies installed in the project.
