const Book = ({ book, onChangeBookshelf }) => {

    const thumbnailURL = book.hasOwnProperty('imageLinks')
        ? `url("${book.imageLinks.thumbnail}")`
        : 'none';

    const bookCoverStyle = {
        width: 128,
        height: 188,
        backgroundImage: `${thumbnailURL}`
    };

    return (
        <div className="book">
            <div className="book-top">
                {<div className="book-cover" style={bookCoverStyle}></div>}
                <div className="book-shelf-changer">
                    <select onChange={e => onChangeBookshelf(book, e.target.value)}>
                        <option value="move">Move to...</option>
                        {book.shelf === "currentlyReading" ?
                            <option value="currentlyReading" disabled>Currently Reading</option> :
                            <option value="currentlyReading">Currently Reading</option>}
                        {book.shelf === "read" ?
                            <option value="read" disabled>Read</option> :
                            <option value="read">Read</option>}
                        {book.shelf === "wantToRead" ?
                            <option value="wantToRead" disabled>Want to Read</option> :
                            <option value="wantToRead">Want to Read</option>}
                        {((book.shelf !== "currentlyReading") && (book.shelf !== "wantToRead") &&
                            (book.shelf !== "read")) ?
                            <option value="none" disabled>None</option> :
                            <option value="none">None</option>}
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && <div className="book-authors">{book.authors}</div>}
        </div>
    )
}

export default Book;