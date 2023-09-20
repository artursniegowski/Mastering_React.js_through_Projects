import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit ({book, onSubmit}) {
    const [title, setTitle] = useState(book.title); // book.title will be the default value displayed
    // deconstructing data from context and getting the needed function
    const {editBookById} = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    className="input"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    // onChange={handleChange}
                />
                <button className="button is-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default BookEdit;