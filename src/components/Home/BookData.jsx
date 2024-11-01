import React, { useEffect, useState } from 'react';
import Book from './Book'
import { data } from 'autoprefixer';

const BookData = () => {
    const [book , setBook] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
        .then(response => response.json())
        .then(data => setBook(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-center font-bold text-4xl my-10'>Books</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-3 mx-3'>
            {
                book.map(book => <Book key={book.bookId} book={book}/>)
            }
            </div>
        </div>
    );
};

export default BookData;