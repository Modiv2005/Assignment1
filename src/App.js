import { useState, useEffect } from 'react'

import './App.css'

function App() {

    const [book, setBook] = useState({

        bookname: "",
        isbn: "",
        title: "",
        author: "",
        publisher: ""

    })

    const [books, setBooks] = useState([])

    const [isEditing, setIsEditing] = useState(false)

    function handleChange(e) {

        setBook({

            ...book,

            [e.target.name]: e.target.value

        })

    }

    function addBook() {

        fetch('http://127.0.0.1:5001/addBook', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(book)

        })

            .then(res => res.json())

            .then(() => {
                getBooks()
                setBook({ bookname: "", isbn: "", title: "", author: "", publisher: "" })
            })

    }

    function editBook(b) {

        setBook(b)

        setIsEditing(true)

    }

    function cancelEdit() {

        setBook({ bookname: "", isbn: "", title: "", author: "", publisher: "" })

        setIsEditing(false)

    }

    function getBooks() {

        fetch('http://127.0.0.1:5001/books')

            .then(res => res.json())

            .then(data => setBooks(data))

    }

    function deleteBook(isbn) {

        fetch(`http://127.0.0.1:5001/delete/${isbn}`, {

            method: 'DELETE'

        })

            .then(() => getBooks())

    }

    function updateBook() {

        fetch(`http://127.0.0.1:5001/update/${book.isbn}`, {

            method: 'PUT',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(book)

        })

            .then(() => {
                getBooks()
                setBook({ bookname: "", isbn: "", title: "", author: "", publisher: "" })
                setIsEditing(false)
            })

    }

    useEffect(() => {

        getBooks()

    }, [])

    return (

        <div className="container">

            <h1>Library Management System</h1>

            <input
                name="bookname"
                placeholder="Book Name"
                value={book.bookname}
                onChange={handleChange}
            />

            <input
                name="isbn"
                placeholder="ISBN No"
                value={book.isbn}
                onChange={handleChange}
                disabled={isEditing}
            />

            <input
                name="title"
                placeholder="Book Title"
                value={book.title}
                onChange={handleChange}
            />

            <input
                name="author"
                placeholder="Author Name"
                value={book.author}
                onChange={handleChange}
            />

            <input
                name="publisher"
                placeholder="Publisher Name"
                value={book.publisher}
                onChange={handleChange}
            />

            <div>

                {!isEditing ? (
                    <button onClick={addBook}>
                        Insert
                    </button>
                ) : (
                    <>
                        <button onClick={updateBook}>
                            Update
                        </button>

                        <button onClick={cancelEdit} style={{ background: '#e74c3c' }}>
                            Cancel
                        </button>
                    </>
                )}

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Book Name</th>

                        <th>ISBN</th>

                        <th>Title</th>

                        <th>Author</th>

                        <th>Publisher</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        books.map(b => (

                            <tr key={b.isbn}>

                                <td>{b.bookname}</td>

                                <td>{b.isbn}</td>

                                <td>{b.title}</td>

                                <td>{b.author}</td>

                                <td>{b.publisher}</td>

                                <td>

                                    <button
                                        onClick={() => editBook(b)}
                                        style={{ background: '#27ae60' }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteBook(b.isbn)}
                                        style={{ background: '#e74c3c' }}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default App