import Bookshelf from './Bookshelf'

const ListBooks = ({ books, onChangeBookshelf }) => {

    const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    const read = books.filter(book => book.shelf === "read")
    const wantToRead = books.filter(book => book.shelf === "wantToRead")

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>

            <div className="list-books-content">
                <Bookshelf
                    title="Currently Reading"
                    books={currentlyReading}
                    onChangeBookshelf={onChangeBookshelf} />
                <Bookshelf
                    title="Read"
                    books={read}
                    onChangeBookshelf={onChangeBookshelf} />
                <Bookshelf
                    title="Want To Read"
                    books={wantToRead}
                    onChangeBookshelf={onChangeBookshelf} />
            </div>
        </div>
    )
}

export default ListBooks