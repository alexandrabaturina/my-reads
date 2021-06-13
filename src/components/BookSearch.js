import { Link } from 'react-router-dom'

const BookSearch = () => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" />
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSearch