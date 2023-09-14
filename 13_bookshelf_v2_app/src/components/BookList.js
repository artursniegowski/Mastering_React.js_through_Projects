import BookShow from './BookShow';

function BookList ({books, onDelete, onEdit}) {

    const showBooks = books.map((book,index) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />;
    });


    return (
        <div className='book-list'>
            {showBooks}
        </div>
    );
};

export default BookList;