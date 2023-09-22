import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList () {
    // deconstructing data from context and getting the needed function / data
    const {books} = useBooksContext();

    const showBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />;
    });

    return (
        <div className='book-list'>
            {showBooks}
        </div>
    );
};

export default BookList;