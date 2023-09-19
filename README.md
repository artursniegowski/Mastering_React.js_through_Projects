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

## 08_translate_app</br>
The Translate App, built using React and powered by the Google Cloud Translation API, offers instant language translation at your fingertips. Users simply input text, select their desired language, and receive real-time translations.Key Features: Text Input: Easily input text to be translated, Language Selection: Choose from various target languages via buttons, Real-Time Translation: Axios, a lightweight HTTP client, consumes the Google Translate API to provide immediate translations, API Integration: Users configure their own Google Translate API key to enable translation functionality securely.</br>

## 09_listing_app</br>
The "Personal Digital Assistants Listing App" is a beginner-friendly React application designed to provide a hands-on experience with key React concepts and best practices. This project showcases the creation and use of reusable components, the handling of props and destructuring, as well as the integration of CSS using the popular npm package, Bulma. At its core, the app allows users to explore a collection of personal digital assistants, complete with pictures and brief descriptions.</br>

## 10_animal_popularity_clicker_app</br>
The Animal Popularity Clicker App is a delightful and interactive single-page web application built using React. Its main objective is to provide users with a fun and engaging experience while showcasing various React concepts and features.</br>
The Animal Popularity Clicker App not only offers an enjoyable and interactive experience for users but also serves as an educational resource for developers interested in learning React. Through its playful approach, it showcases essential React concepts and best practices while providing entertainment and a sense of whimsy to its users. Whether you're a beginner looking to learn React or simply seeking a few moments of fun, this app is the perfect place to start. Enjoy the excitement of discovering new animals and growing hearts as you explore the world of React development!</br>

## 11_image_seeker_app </br>
Image Seeker is a single-page web application built with React.js that empowers users to discover and display images based on their search queries. This user-friendly application harnesses the power of the Unsplash API to seamlessly retrieve and showcase up to 10 high-quality images that match the user's search criteria.</br>

## 12_bookshelf_app </br>
The Bookshelf app is a single-page React application designed to create and manage a digital bookshelf. Users can easily add, edit, and delete book titles, with each book displayed as a card on the page. The app also provides a visually engaging experience by automatically generating random book cover images for each added book.</br

## 13_bookshelf_v2_app </br>
The 13_Bookshelf_v2_app is an enhanced version of the original single-page React application 12_Bookshelf_app designed for creating and managing a digital bookshelf. This updated version introduces persistent data storage by integrating a JSON server. Users can seamlessly add, edit, and delete book titles while enjoying the visual appeal of randomly generated book cover images for each added book.</br>

## 14_bookshelf_v3_app </br>
The 14_bookshelf_v3_app represents an enhanced version of the 13_Bookshelf_v2_app single-page React application, designed for creating and managing a digital bookshelf. This updated version introduces significant improvements to data management and user experience. 
The application has been optimized for data management by implementing the React context system. Instead of passing data through props, the context system is used, making data sharing more efficient and maintaining a clear separation of concerns. The app also effectively addresses the useEffect endless loop problem by utilizing the useCallback hook. This ensures that data fetching and updates occur efficiently and do not result in unnecessary re-renders.</br>

## 15_reusable_components_app </br>
The "15_reusable_components_app" is a React.js project that demonstrates the creation and organization of reusable components for building user interfaces. The primary focus of this project is to develop custom, highly modular components that can be easily integrated into larger applications. These components cover a wide range of UI elements, including navigation, buttons, modals, tables, sorting tables, counters, dropdowns, and accordions.</br>
Main Components Created:</br>
- Reusable Custom Navigation: </br>
Custom navigation system created from scratch to ensure smooth page transitions without full page reloads during route changes.</br>
- Reusable Custom Dropdown Component:</br>
Designed to provide a customizable dropdown UI element. Utilized the useRef hook to detect clicks outside the dropdown for closing. </br>
- Reusable Custom Accordion Component:</br>
A flexible accordion component that can be configured by passing objects as props for dynamic content display. Utilizes useState for managing expanded/collapsed states.</br>
- Reusable Custom Button Component:</br>
Customizable button component with support for various styles, including primary, secondary, success, warning, and danger. Utilizes classNames library for easy styling based on props.</br>
- Reusable Custom Modal Component:</br>
Modal component for displaying content overlays. Ensures the background is grayed out for a focused modal experience.</br>
- Reusable Custom Table and Sorting Table Components:</br>
Fully customizable table components that can render data based on props. Sorting table allows users to pass sorting functions and data as props for dynamic sorting. </br>
- Reusable Custom Counter Component:</br>
Demonstrates the use of useReducer and custom hooks to manage and display count values.</br>
