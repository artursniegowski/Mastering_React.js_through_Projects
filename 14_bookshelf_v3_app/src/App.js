import { useContext, useEffect } from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // deconstructing data from context and getting the functon fetchbooks
    const { fetchBooks } = useContext(BooksContext);

    // run this whenever our component is first rendered on the screen
    // if we pass a vairable into the second argument, in the array
    // this will rerender or get called every time this variables changes
    // since we dont pass any vairable it will be called only for the first time
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <h1>Bookshelf</h1>
            <BookList />
            <BookCreate />
        </div>
    );
};

export default App;