import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow ({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(book.id);
    };

    const handleEdit = () => {
        // setting the value of showedit to its oposit
        setShowEdit(!showEdit);
    };

    // let content = <h3>{book.title}</h3>;
    // if (showEdit) {
    //     content = <BookEdit book={book} onEdit={onEdit} />;
    // };

    // combining other handlers
    // this way we can pass one handler and we dont need to create two seperate handlers
    const handleSubmit = (bookId, newTitle) => {
        setShowEdit(false);
        onEdit(bookId, newTitle);
    };

    return (
        <div className="book-show">
            <img 
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>
            {/* {content} */}
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