import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import {v4 as uuidv4 } from 'uuid';

const createRandomID = () => {
    // creating a random ID with UUID
    return uuidv4();
};


function App() {
    const [books, setBooks] = useState([]);

    const handleCreateBook = (title) => {
        const newBook = {
            title, //this is eqivalent to: title: title,
            id: createRandomID(),
        };
        setBooks([...books, newBook]);
        // setBooks((prevData)=>{
        //     return [...prevData, newBook]
        // });
    };


    const deleteBookById = (bookId) => {
        const booksUpdated = books.filter((book) => {
            return book.id !== bookId;
        });

        setBooks(booksUpdated);
    };

    const editBookById = (bookId, newTitle) => {
        const bookUpdated = books.map((book) =>{
            if (book.id === bookId){
                return {...book, title: newTitle};
            }
            return book;
        });

        setBooks(bookUpdated);
    };

    return (
        <div className="app">
            <h1>Bookshelf</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
};

export default App;