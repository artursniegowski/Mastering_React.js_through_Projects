# React Apps </br>
This is a repository of React apps to better understand how to develop apps in this frontend JavaScript library for building user interfaces. This repository is organized around projects, and each project expands both the number of topics covered and the difficulty level. This is a perfect place to start your journey with React.js .</br>


In order to make React work, you will have to follow these steps:</br>
1. Get the latest version of node.js: https://nodejs.org/en/</br>
2. Install a code editor where you can easily manage your React app:  https://code.visualstudio.com/</br>
3. Fork or clone the repository, and navigate to the project you are interested in. Example: **cd 01_contacts_app**.</br>
4. Install all dependencies with: **npm install**.</br>
5. Run the React app with the following command:</br>
**npm start**</br>


## 01_contacts_app</br>
This is a simplistic version of a contact app, where all contacts are listed as separate component Card. The data for the contacts is defined in a file as an array of objects, which will be retrieved in index.js and rendered one by one. It was styled with CSS and Bootstrap 5.3 and developed with React.js.</br>

## 02_emojipedia_app</br>
This is a web app, where all emojis are displayed as cards with the name of the emoji as well as the description of the given emoji. The list is created dynamically by retrieving an array of objects, containing all the data about emojis. By updating the file emojisData.js, the website will update the emoji list. It was styled with CSS and Bootstrap 5.3 and developed with React.js.</br>

## 03_login_app</br>
This is a web application that renders the login or registration page dynamically based on the variable **userRegistered**, which indicates whether or not a user is registered. The main concept to take away from this project is the conditional rendering with tenary operators and with the AND && operator with React components. It was styled with CSS and Bootstrap 5.3 and developed with React.js. </br>

## 04_clock_app</br>
This is a web application that renders the current time every second and can also update the time when the button "Get Time" is pressed. The main React feature investigated in this project is the use of React Hooks, specifically the useState. This makes it possible to update values in React components. It was styled with CSS and Bootstrap 5.3 and developed with React.js. </br>

## 05_greeting_screen</br>
This is a web application that renders a nice welcome message after filling in all the inputs on the website. Each input will be handled independently. The main React feature investigated in this project is the use of React Hooks, with some complex use of useState where an object is set and also utilizing the spread operator and destructuring assignment in Java Script. It was styled with CSS and Bootstrap 5.3 and developed with React.js.   </br>

## 06_todo_list_app</br>
This is a web application that presents an empty to-do list. The user can enter the next task into the input area, and after pressing the Add button, it will be added to the list. Each task can be deleted by pressing on it. This web app represents a simplistic ToDo List created with React.js. The main React feature investigated in this project is the use of React Hooks, with some complex use of useState, as well as the management of the component tree and how to pass variables and functions between components. It was styled with CSS and Bootstrap 5.3 and developed with React.js.   </br>

## 07_kepper_app</br>
This web app presents the option of making dynamic lists. On the home page, the user will see an input saying "Take a note..." and after navigating the cursor in this field, the note will expand and give the option for the user to fill in the title and the content of the note. With a plus button, the note can be added to the home page. Each note that was added can also be deleted with the "trash bin" button. The main React feature investigated in this project is the use of React Hooks, with some complex use of useState, as well as the management of the component tree and how to pass variables and functions between components. On top of that, the Material-UI and  Material-icons packages were installed and used to generate icons, floating action buttons, and zoom effects with React components. It was styled with CSS and Bootstrap 5.3 and developed with React.js with @mui/material v.5 and @mui/icons-material v.5.</br>