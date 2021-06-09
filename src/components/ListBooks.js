import Bookshelf from './Bookshelf'

const ListBooks = ({ books }) => {

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
                    books={currentlyReading} />
                <Bookshelf
                    title="Read"
                    books={read} />
                <Bookshelf
                    title="Want To Read"
                    books={wantToRead} />
            </div>
        </div>
    )
}

export default ListBooks