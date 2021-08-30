import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as BooksAPI from '../utils/BooksAPI.js'
import Book from './Book'

const BookSearch = ({ books, onChangeBookshelf }) => {

    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const searchBooks = q => {
        BooksAPI.search(q)
            .then(res => {
                if (res) {
                    if (res.error) {
                        setSearchResults([])
                    } else {
                        setSearchResults(res)
                    }
                } else {
                    console.log('Not found')
                }
            })

    }

    const updateQuery = e => {
        setQuery(e.target.value)
        searchBooks(e.target.value)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={updateQuery} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResults && searchResults.map(book => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onChangeBookshelf={onChangeBookshelf} />
                        </li>
                    ))}

                </ol>
            </div>
        </div>)
}

export default BookSearch