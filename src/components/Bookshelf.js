import Book from './Book'

const Bookshelf = ({ title, books }) => {

    console.log(books)

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book
                                coverImage={book.imageLinks.thumbnail}
                                title={book.title}
                                authors={book.authors} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf