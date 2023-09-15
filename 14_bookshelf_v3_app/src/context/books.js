import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }){
    const [books, setBooks] = useState([]);
    const URL = "http://localhost:3001/books";

    const fetchBooks = useCallback(async () => {
        const res = await axios.get(URL);
        setBooks(res.data);
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
    };


    // sending a delete request fro the book
    const deleteBookById = async (bookId) => {
        await axios.delete(URL+`/${bookId}`);
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

    const valueToShare = {
        books, //equivalent to books: books,
        fetchBooks, //equivalent to stableFetchBooks: stableFetchBooks,
        handleCreateBook, //equivalent to handleCreateBook: handleCreateBook,
        deleteBookById, //equivalent to deleteBookById: deleteBookById,
        editBookById, //equivalent to editBookById: editBookById
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
};

export { Provider };
export default BooksContext;

// import BooksContext, { Provider } from ...