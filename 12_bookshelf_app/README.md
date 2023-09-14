# 12_bookshelf_app </br>
The Bookshelf app is a single-page React application designed to create and manage a digital bookshelf. Users can easily add, edit, and delete book titles, with each book displayed as a card on the page. The app also provides a visually engaging experience by automatically generating random book cover images for each added book.</br>


## Features:</br>
- Title and Purpose:</br>
The app's title, Bookshelf, is prominently displayed at the top of the page, providing a clear indication of its purpose.</br>
- Adding Books:</br>
Below the title, there is an input text field where users can enter book titles.</br>
A "Submit" button is provided next to the input field to confirm the addition of a new book.</br>
When a user submits a book title, a new card is dynamically generated and displayed in the middle of the page.</br>
- Book Cards:</br>
Each book card features the following elements:</br>
A randomly generated book cover image, adding visual appeal to the card.</br>
The book's title, which is displayed prominently on the card.</br>
Two options in the top corners of each card:</br>
A pencil icon, indicating the ability to edit the card.</br>
A cross icon, allowing users to delete the card.</br>
- Editing Books:</br>
Users can edit a book card by clicking on the pencil icon.</br>
Upon clicking the pencil icon, the title of the card transforms into an input field.</br>
An additional "Save" button appears below the input field, allowing users to confirm their edits.</br>
After saving, the title reverts to view mode with the updated title.</br>


## Functionalities Demonstrated:</br>
This project showcases the interactive use of React components, emphasizing how to pass and manage props bidirectionally between nested components.</br>
Event handlers are employed for various interactions, such as adding, editing, and deleting book cards.</br>
The app effectively manages the modification, deletion, and addition of elements within an array by using React state.</br>
UUIDs (Universally Unique Identifiers) are utilized to assign unique identifiers to each book card, ensuring they can be uniquely identified and managed.</br>

---

The "Bookshelf" app serves as an excellent example of how to develop React components while demonstrating best practices for passing data between nested components, utilizing event handlers for interactivity, and effectively managing state. Additionally, it showcases the use of UUIDs for unique identification, providing users with a seamless and engaging experience for managing their virtual book collection.



---

## Dependencies: </br>
Random pictures</br>
https://picsum.photos/</br>


React - Controlled Components</br>
https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable</br>


Generating random unique IDs</br>
https://www.npmjs.com/package/uuid</br>


It was developed using React.js, JavaScript, CSS, HTML, States - React, hooks - React, event handlers - React, Controlled Components - React</br>

---

# HOW TO RUN THE APP</br>

1. Next you can run the App by running npm start as shown below.

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

***The main page.***</br>
![Screenshot](docs/img/01_img.png)</br>
 
---

***The main page - adding new book.***</br>
![Screenshot](docs/img/02_img.png)</br>
 
---

***The main page - after adding new book.***</br>
![Screenshot](docs/img/03_img.png)</br>
 
---

***The main page - edit a book.***</br>
![Screenshot](docs/img/04_img.png)</br>
 
---

***The main page - after editing a book.***</br>
![Screenshot](docs/img/05_img.png)</br>
 
---

***The main page - deleteing a book.***</br>
![Screenshot](docs/img/06_img.png)</br>
 
---