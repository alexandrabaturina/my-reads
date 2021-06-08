import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import ListBooks from './components/ListBooks'
import Book from './components/Book'
import BookSearch from './components/BookSearch'
import './App.css'

const BooksApp = () => {

  const [books, setBooks] = useState([])

  // Get books
  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await BooksAPI.getAll()
      setBooks(booksFromServer)
    }
    getBooks()
  }, [])

  return (
    <div className="app">
      <Route path="/" exact render={() => (
        <ListBooks books={books} />
      )} />
      <Route path="/search" component={BookSearch} />
    </div>
  )
}

export default BooksApp