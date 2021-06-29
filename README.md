# MERN Stack Employee Management System

MERN Stack Employee Management System is a web based application tha helps employers manage thier employees easily.

## How to Run

- Either clone or download the project from this repository to your device
- Inside your terminal, Navigate to root folder /server directory and type **npm install** followed by **npm start**
- Navigate to /client diretory and run command **npm install** followed by **npm start**
- Open preffered browser and go to URL **<http://localhost:3000>**

## How to use the app

- Add Employees
  - Fill out the form and hit **submit** to add new employee

- Edit Employee Info
  - Click on the Edit Button (pen icon) to select a person to edit information
  - After completion of filling out the form, hit **submit** to edit employe information

- Remove Employee
  - Click on the remove button (trash icon) to remove employee
  - A notification will pop up confirming removal. This gives the user to revert back / undo removal of employee if done by accident

- Search Employee
  - Search employee by name in the provided search area to find result of choice

## User Stories

- A user can browse through employee information
- A user can edit employee information
- A user can add new employee
- A user can remove employees
- A user can search and locate specific employees by name

## Features

- Employee information is stored on a MongoDB database
- Express.js communicates between the backend and the frontend
- React.js is used to display the fetched information from the backend to the frontend
- Node.js powers the server in the backend
- The front end uses a powerful middleware for managing the different states of the app known as Redux/React-Redux-Saga
- It also uses styled components to beautifully style the HTML components
- The app is Dockerized

## Future Features

- Use Typescript for development
- Deploying app on a free hosting platform such as Heroku
- Making a responsive UI

## Dependencies

- "@testing-library/jest-dom": "^5.11.4",
- "@testing-library/react": "^11.1.0",
- "@testing-library/user-event": "^12.1.10",
- "@tippyjs/react": "^4.2.5",
- "@types/jest": "^26.0.23",
- "@types/node": "^15.12.4",
- "@types/react": "^17.0.11",
- "@types/react-dom": "^17.0.8",
- "axios": "^0.21.1",
- "moment": "^2.29.1",
- "react": "^17.0.2",
- "react-bootstrap": "^1.6.1",
- "react-datepicker": "^4.1.1",
- "react-dom": "^17.0.2",
- "react-hook-form": "^7.9.0",
- "react-icons": "^4.2.0",
- "react-redux": "^7.2.4",
- "react-scripts": "4.0.3",
- "react-table": "^7.7.0",
- "react-toast-component": "^1.4.18",
- "react-toastify": "^7.0.4",
- "react-tooltip": "^4.2.21",
- "redux": "^4.1.0",
- "redux-saga": "^1.1.3",
- "styled-components": "^5.3.0",
- "typescript": "^4.3.4",
- "web-vitals": "^1.0.1",
- "cors": "^2.8.5",
- "express": "^4.17.1",
- "mongoose": "^5.12.13",
- "nodemon": "^2.0.7",

- MongoDB
- NodeJS 14

## Screenshots

### Landing Page

<img src="https://github.com/AlAswaad99/mern-stack-ems/blob/master/screenshots/Screenshot%20(491).png" alt="landing page" width="400"/>

### Search

<img src="https://github.com/AlAswaad99/mern-stack-ems/blob/master/screenshots/Screenshot%20(492).png" alt="Search Employee" width="400"/>

### Edit

<img src="https://github.com/AlAswaad99/mern-stack-ems/blob/master/screenshots/Screenshot%20(493).png" alt="Edit Employee with Validation" width="400"/>

### Remove

<img src="https://github.com/AlAswaad99/mern-stack-ems/blob/master/screenshots/Screenshot%20(494).png" alt="Remove Employee with Undo choice" width="400"/>