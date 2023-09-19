import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate () {
    const [title, setTitle] = useState('');
    // deconstructing data from context and getting the needed function
    const { handleCreateBook } = useBooksContext();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (title !== ''){
            handleCreateBook(title);
            // set back the input
            setTitle('');
        }
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input 
                    className="input"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookCreate;