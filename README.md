# Positec Auction - Project 3

## About The App

The Positec Auction App is created for Positec Group, a tool manufacturing company. This app will allow the company to post some of their tools and equipment for an internal employee auction. Employees will have the opportunity to create an account or sign in, view a list of items availale for auction, and see which items they have bid on.

Check out a live version of the app here: [Positec Auction App](https://evening-sands-91672.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to install and run this programterm on your own device you will need to be able to run MongoDB, in addition to needing the following npm packages:

```
Node.js
Express.js
Mongoose
Bcrypt
Axios
Fetch
```

### Installing

You will need to do the following steps after cloning the repo to your device in order to ensure that it works properly.

To ensure Node.js is running within the package and configure all modules for use:

```
npm install
```

This should install all the requisite modules for the server and then cd into the client folder to install all the modules required there. following this installation check to make sure that you have a node_modules folder in both the root directory and within the 'client' folder and things should be ready to run.

```
For the Server:
express
axios
if-env
mongoose
concurrently
fetch
bcrypt

For the React App:
axios
prop-types
react
react-alert
react-alert-template-basic
react-dom
react-router-dom
react-scripts
react-transition-group
```

## Running

To run this locally you will need to have MongoDB running on your computer, you can then begin the server simply by path into the root folder for the application and running:

```
npm start
```

As per the package.json... with it being in dev mode (which is checks for), it will run `nodemon --ignore 'client/*'` (Starting the server and ignoring the contents of the client folder, which houses the React Application) concurrently with running `npm run client` = `cd client && npm run start`which grabs the client folder and starts the React Application running on proxy port 3001. If all runs smoothly you should see another browser tab open and navigate to the site.

## Built With

- [React](https://reactjs.org/) - JavaScript Library
- [Node.js](https://nodejs.org/en/) - Runtime Environment
- [Express.js](https://expressjs.com/) - Web Framework
- [Mongoose](https://mongoosejs.com/) - MongoDB Object Modeling
- [MongoDB](https://www.mongodb.com/) - Database
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [gitignore.io](https://www.gitignore.io/) - For creating the .gitignore
- [WebStorm](https://www.jetbrains.com/webstorm/) - JavaScript IDE
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - For hashing password
- [Fetch](https://www.npmjs.com/package/fetch) -  Obtaining URL contents
- [Axios](https://www.npmjs.com/package/axios) - HTTP client