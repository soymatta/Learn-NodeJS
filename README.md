# Setup MERN Project

MERN (MySQL - Express.JS - ReactJS - NodeJS) is the project stack.

## Server-Side

1. Node production modules
   - Express.JS: Backend and query management
   - MySQL2: Manage SQL connection
   - Morgan: Console backend outputs
   - CORS: Manage CORS connections
   Code: `npm i express mysql2 morgan cors`

2. Node development modules
   - Nodemon: Automatically reset the project when detects a change
   Code: `npm install --save-dev nodemon`

## Client-Side

1. Create React application with Vite
   `npm create vite`

2. Install client modules
   - React-Router-Dom: Manage all the client page routes
   - Axios: Create all typo of HTTP methods request
   - Formik: Use forms ease
   Code: `npm i react-router-dom axios formik`
