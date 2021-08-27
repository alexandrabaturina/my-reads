import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = ({ books, onChangeBookshelf }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>

            <div className="list-books-content">
                <Bookshelf
                    title="Currently Reading"
                    books={books.filter(book => book.shelf === "currentlyReading")}
                    onChangeBookshelf={onChangeBookshelf} />
                <Bookshelf
                    title="Read"
                    books={books.filter(book => book.shelf === "read")}
                    onChangeBookshelf={onChangeBookshelf} />
                <Bookshelf
                    title="Want To Read"
                    books={books.filter(book => book.shelf === "wantToRead")}
                    onChangeBookshelf={onChangeBookshelf} />
            </div>

            <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
            </div>
        </div>
    )
}

export default ListBooks