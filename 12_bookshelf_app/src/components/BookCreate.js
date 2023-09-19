import { useState } from "react";

function BookCreate ({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (title !== ''){
            onCreate(title);
            // set back the input
            setTitle('');
        }
    };

    // const handleInputChange = (event) => {
    //     setTitle(event.target.value);
    // };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input 
                    className="input"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    // onChange={handleInputChange}
                />
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookCreate;