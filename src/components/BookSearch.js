import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as BooksAPI from '../utils/BooksAPI.js'
import Book from './Book'

const BookSearch = ({ books, onChangeBookshelf }) => {

    console.log(books)

    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // Set current shelves
    const setShelf = items => {
        items.forEach(item => {
            const overlap = books.find(book => book.id === item.id)
            if (overlap) {
                item.shelf = overlap.shelf
            }
        })
        return items
    }

    const searchBooks = q => {
        BooksAPI.search(q)
            .then(res =>
                res.error ? setSearchResults([]) : setSearchResults(setShelf(res)))
    }

    const updateQuery = query => {
        setQuery(query)
        searchBooks(query)
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
                        onChange={(e) => updateQuery(e.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResults &&
                        searchResults.map(book => (
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