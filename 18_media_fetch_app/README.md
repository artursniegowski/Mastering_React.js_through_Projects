# 18_media_fetch_app </br>
18_media_fetch_app is a React and Redux application focused on understanding data fetching and managing data in a Redux environment. It fetches data from an external API and provides various features to interact with it.</br>

## Key Features: </br>
- using the tag system to implement automatic data re-fetching, inside of Redux Toolkit query.
- User List: Upon app initialization, it fetches and displays a list of users from an external API. Users can be added, deleted, and expanded to view their albums and photos, which can also be added.</br>
- Dynamic Data Loading: To optimize bandwidth-constrained connections, the app implements lazy data loading. It fetches only the required data when a user interacts with specific elements, reducing initial data overfetching.</br>
- Random Data Generation: All user names, album titles, and photo data are randomly generated, providing a variety of records for testing.</br>
- Data Storage: The app saves the generated data to an external API server using JSON Server, allowing future retrieval of the randomly generated records.</br>
- Data Loading Experience: To enhance the user experience, the app employs loading spinners and clear error handling to ensure that users are aware of data fetching activities.</br>
- Redux Toolkit and Redux Toolkit Query: The project is divided into three phases. The first phase, fetching the list of users, uses Plain Redux Toolkit for making requests. The subsequent phases, fetching albums and photos, utilize Redux Toolkit Query, an extension that simplifies advanced data fetching features.</br>



The goal of 18_media_fetch_app is to provide a comprehensive understanding of data fetching in Redux, including handling bandwidth-constrained connections, optimizing data loading, and creating a seamless user experience.</br>


---

## Dependencies: </br>

React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.</br>
https://www.npmjs.com/package/react-redux</br>
https://react-redux.js.org/</br>


The official, opinionated, batteries-included toolset for efficient Redux development</br>
https://www.npmjs.com/package/@reduxjs/toolkit</br>


Generate massive amounts of fake (but realistic) data for testing and development.</br>
https://www.npmjs.com/package/@faker-js/faker</br>


Json - server - full fake REST API </br>
https://www.npmjs.com/package/json-server</br>


Promise based HTTP client for the browser and node.js</br>
https://www.npmjs.com/package/axios</br>


A simple JavaScript utility for conditionally joining classNames together.</br>
https://www.npmjs.com/package/classnames</br>


Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</br>
https://www.npmjs.com/package/react-icons</br>


CSS library - tailwindcss</br>
https://tailwindcss.com/docs/guides/create-react-app</br>



It was developed using React.js, JavaScript, CSS, HTML, tailwindCSS, React-Redux, redux.js - toolkit, react-icons, axios, json-server, faker</br>


---

# HOW TO RUN THE APP</br>

1. First you need to run the **npm install**</br>
2. Next, you need to open two windows in the terminal:</br>
- in the first window, start the json server with the command: **npm run start:server** </br>
- in the second window, start the react app with the command: **npm run start**</br>
3. DATA WILL BE STORED IN db.json.</br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


---


## Examples of views from the website:</br>

---

***The main page - loading.***</br>
![Screenshot](docs/img/01_img_loading_main_page.png)</br>
 
---

***The main page - loaded.***</br>
![Screenshot](docs/img/02_img_main_page.png)</br>
 
---


***The main page - albums loading.***</br>
![Screenshot](docs/img/03_img_loading_albums_for_person.png)</br>
 
---

***The main page - albums loaded.***</br>
![Screenshot](docs/img/04_img_albums_loaded.png)</br>
 
---

***The main page - adding album - spinner.***</br>
![Screenshot](docs/img/05_img_adding_album_spinner.png)</br>
 
---

***The main page - added album gets updated.***</br>
![Screenshot](docs/img/06_img_added_album_gets_updated.png)</br>
 
---

***The main page - showing photos in an album.***</br>
![Screenshot](docs/img/07_img_showing_photos.png)</br>
 
---

***The main page - delete option of a pic when hovering over.***</br>
![Screenshot](docs/img/08_img_when_hovering_over_photo_option_to_delete.png)</br>
 
---

***The main page - after image deletion.***</br>
![Screenshot](docs/img/09_img_after_deleting_photo.png)</br>
 
---


***The main page - after image deletion.***</br>
![Screenshot](docs/img/10_img_overview.png)</br>
 
---
