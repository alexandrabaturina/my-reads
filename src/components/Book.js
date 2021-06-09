const Book = ({ coverImage, shelf, title, authors }) => {

    const bookCoverStyle = {
        width: 128,
        height: 188,
        backgroundImage: `url("${coverImage}")`
    }

    return (
        <div className="book">
            <div className="book-top">
                {coverImage && <div className="book-cover" style={bookCoverStyle}></div>}
                <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        {shelf === "currentlyReading" ?
                            <option value="currentlyReading" disabled>Currently Reading</option> :
                            <option value="currentlyReading">Currently Reading</option>}
                        {shelf === "read" ?
                            <option value="read" disabled>Read</option> :
                            <option value="read">Read</option>}
                        {shelf === "wantToRead" ?
                            <option value="wantToRead" disabled>Want to Read</option> :
                            <option value="wantToRead">Want to Read</option>}
                        {((shelf !== "currentlyReading") && (shelf !== "wantToRead") &&
                            (shelf !== "read")) ?
                            <option value="none" disabled>None</option> :
                            <option value="none">None</option>}
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book