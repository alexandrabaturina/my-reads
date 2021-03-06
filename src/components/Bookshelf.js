import Book from './Book'

const Bookshelf = ({ title, books, onChangeBookshelf }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onChangeBookshelf={onChangeBookshelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default Bookshelf;