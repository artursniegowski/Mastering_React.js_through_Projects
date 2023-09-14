import { useState } from "react";

function BookEdit ({book, onSubmit}) {
    const [title, setTitle] = useState(book.title); // book.title will be the default value displayed

    // const handleChange = (event) =>{
    //     setTitle(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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