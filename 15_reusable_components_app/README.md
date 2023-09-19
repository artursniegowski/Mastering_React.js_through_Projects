# 15_reusable_components_app </br>
The "15_reusable_components_app" is a React.js project that demonstrates the creation and organization of reusable components for building user interfaces. The primary focus of this project is to develop custom, highly modular components that can be easily integrated into larger applications. These components cover a wide range of UI elements, including navigation, buttons, modals, tables, sorting tables, counters, dropdowns, and accordions.

## Main Components Created:</br>
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

## Technologies and Libraries Used:</br>
React.js: The core library for building the user interface.</br>
JavaScript: Used for coding logic and functionality.</br>
CSS: Styling for components.</br></br>
HTML: Markup for rendering UI elements.
TailwindCSS: A utility-first CSS framework for styling.</br>
useState, useEffect, useCallback, useReducer, useRef Hooks: React hooks used for state management and component interactions.</br>
prop-types: A library for validating prop types.</br>
classnames: A utility for managing class names and styling.</br>
react-icons: Provides a library of icons for UI elements.</br>
immer: A library used for controlling state updates in useReducer.</br>
createPortal: Used for rendering children into a different part of the DOM.</br>

## Project Goals and Challenges:</br>
Reusability: The project's primary goal is to create highly reusable components that can be easily integrated into various projects.</br>
Optimized State Management: Each component was carefully designed to optimize state usage, ensuring efficiency.</br>
Customization: Components offer various customization options for styling and functionality.</br>
Learning Hooks: Demonstrating the usage of React hooks like useState, useEffect, useCallback, useReducer, and useRef.</br>
Organizing Components: Exploring strategies for organizing and managing components within larger projects.</br>
Conditional Rendering: Using conditional rendering to display components based on specific conditions or user interactions.</br>


This "Reusable Components App" serves as a valuable resource for developers looking to enhance their knowledge of React.js, create reusable UI components, and understand best practices for building modular, efficient user interfaces.</br>


---

## Dependencies: </br>

React - Controlled Components</br>
https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable</br>

useState hook</br>
https://react.dev/reference/react/useState</br>

useEffect hook</br>
https://react.dev/reference/react/useEffect</br>

useCallback hook</br>
https://react.dev/reference/react/useCallback</br>

useReducer hook</br>
https://react.dev/reference/react/useReducer</br>

useRef hook</br>
https://react.dev/reference/react/useRef</br>

using prop-types library</br>
https://www.npmjs.com/package/prop-types</br>

tailwindcss</br>
https://tailwindcss.com/</br>

using classnames library</br>
https://www.npmjs.com/package/classnames</br>

icons - react-icons </br>
https://react-icons.github.io/react-icons/ </br>

for controling state in useReducer - additional library IMMER</br>
https://www.npmjs.com/package/immer</br>

createPortal rendering some children into a different part of the DOM.</br>
https://react.dev/reference/react-dom/createPortal</br>

For groupping elements - Fragment</br>
https://react.dev/reference/react/Fragment</br>


Main Compoenents created:</br>
- reusable custom navigation</br>
- reusable custom Dropdown componenet</br>
- reusable custom Accordion componenet</br>
- reusable custom Button componenet</br>
- reusable custom Modal componenet</br>
- reusable custom Table componenet</br>
- reusable custom sorting Table componenet</br>
- reusable custom Counter componenet</br>
- custom hooks</br>
- useReducer</br>



It was developed using React.js, JavaScript, CSS, HTML, TailwindCSS, useState, useEffect, useCallback, useReducer, useRef hooks - React, event handlers - React, Controlled Components - React, Comunication using the Context System - React, prop-types, createPortal, classnames, Fragment, react-icons, Immer, organiznig components in a larger porject, creating reusable components, conditional rendering</br>

---

# HOW TO RUN THE APP</br>

1. First you need to run: **npm install**</br>
2. Next, you can run the app with: **npm run start**</br>

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

***The main page - Dropdown component.***</br>
![Screenshot](docs/img/01_img_drop_down.png)</br>
 
---

***The main page - Dropdown component.***</br>
![Screenshot](docs/img/02_img_drop_down.png)</br>

---

---

***The main page - Accordion component.***</br>
![Screenshot](docs/img/03_img_accordion.png)</br>

---

***The main page - Accordion component.***</br>
![Screenshot](docs/img/04_img_accordion.png)</br>

---

***The main page - Accordion component.***</br>
![Screenshot](docs/img/05_img_accordion.png)</br>

---

---

***The main page - Buttons component.***</br>
![Screenshot](docs/img/06_img_buttons.png)</br>

---

---

***The main page - Modal component.***</br>
![Screenshot](docs/img/07_img_modal.png)</br>

---

***The main page - Modal component.***</br>
![Screenshot](docs/img/08_img_modal.png)</br>

---

---

***The main page - Sorting Table component.***</br>
![Screenshot](docs/img/09_img_sorting_table.png)</br>

---

***The main page - Sorting Table component.***</br>
![Screenshot](docs/img/10_img_sorting_table.png)</br>

---

***The main page - Sorting Table component.***</br>
![Screenshot](docs/img/11_img_sorting_table.png)</br>

---

***The main page - Sorting Table component.***</br>
![Screenshot](docs/img/12_img_sorting_table.png)</br>

---
---

***The main page - Counter component - useReducer.***</br>
![Screenshot](docs/img/13_img_counter_useReducer.png)</br>

---

***The main page - Counter component - useReducer.***</br>
![Screenshot](docs/img/14_img_counter_useReducer.png)</br>

---