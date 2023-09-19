import { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

function BookShow ({book}) {
    const [showEdit, setShowEdit] = useState(false);
    // deconstructing data from context and getting the needed function / data
    const {deleteBookById} = useBooksContext();

    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const handleEdit = () => {
        // setting the value of showedit to its oposit
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    return (
        <div className="book-show">
            <img 
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>
                {
                    showEdit === true ? 
                        <BookEdit book={book} onSubmit={handleSubmit} /> : 
                        <h3>{book.title}</h3>
                }
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;