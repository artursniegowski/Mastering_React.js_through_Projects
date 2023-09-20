import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import {v4 as uuidv4 } from 'uuid';
import axios from "axios";

const createRandomID = () => {
    // creating a random ID with UUID
    return uuidv4();
};


function App() {
    const [books, setBooks] = useState([]);

    const URL = "http://localhost:3001/books";

    const fetchBooks = async () => {
        const res = await axios.get(URL);
        setBooks(res.data);
    };

    // run this whenever our component is first rendered on the screen
    // if we pass a vairable into the second argument, in the array
    // this will rerender or get called every time this variables changes
    // since we dont pass any vairable it will be called only for the first time
    useEffect(() => {
        fetchBooks();
    }, []);


    const handleCreateBook = async (title) => {
        // saving data to the server
        const res = await axios.post(
            URL,
            {
                title, //equivalent to = title: title,
        });
            
        // setting data from the server to our variables
        // the response is the data that was saved to the sever
        setBooks([...books, res.data]);
        // console.log(res);
    };


    // sending a delete request fro the book
    const deleteBookById = async (bookId) => {
        const res = await axios.delete(URL+`/${bookId}`);

        const booksUpdated = books.filter((book) => {
            return book.id !== bookId;
        });

        setBooks(booksUpdated);
    };

    const editBookById = async (bookId, newTitle) => {
        const res = await axios.put(
            URL+`/${bookId}`,
            {
                title: newTitle
        });

        // we are taking the object from the respons  bc 
        // it could have been updated by another person
        const bookUpdated = books.map((book) =>{
            if (book.id === bookId){
                return {...book, ...res.data};
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