import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    const { bookId,bookName, author, image, tags, rating } = book;
    return (
<Link to={`books/${bookId}`}>
    <div className="card bg-base-100 shadow-xl">
        <figure>
            <img className='h-[380px] w-full overflow-hidden'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
        <div className="card-actions">
            <div className="badge badge-neutral">{tags[0]}</div>
            <div className="badge badge-neutral">{tags[1]}</div>
            </div>
            <h2 className="card-title">
            {bookName}
            </h2>
            <p>By: {author}</p>
            <div className='border-b-2 border-dotted'></div>
            <div className='flex justify-between'>
                <h1>Fiction</h1>
                <div className='flex'>
                    <p>{rating}</p>
                    <CiStar size={24} />
                </div>
            </div>
            </div>
    </div>
</Link>
    );
};

export default Book;