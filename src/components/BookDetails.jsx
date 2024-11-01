import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {addToStoredReadList} from '../utility/AddToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    // Get the Selected book Id
    const {bookId} = useParams();
    
    // Fetch the data from the loader
    const data = useLoaderData();

    // convert string to number
    const id = parseInt(bookId);

    //check if the book id matck the prams id
    const singleBook = data.find(book => book.bookId === id);
    const { bookName, author, image, tags, publisher, yearOfPublishing, category, rating, totalPages, review  } = singleBook;

    // Mark as read function
    const markAsRead = (id) => {      
          addToStoredReadList(id)
    }

    // wish btn function
    const addTOwidhList = (id) => {
        addToStoredReadList(id)
    }
    return (
        <div className='lg:mt-20 mt-5 mx-5 lg:mb-10'>
            <div className='lg:flex gap-10'>
                <div className='bg-base-200 lg:w-1/2 mx-auto w-full grid place-items-center rounded-xl'>
                    <img className='my-20 lg:h-[600px] h-auto' src={image} alt="" />
                </div>
                <div className='lg:w-1/2 w-full space-y-5'>
                    <h1 className='font-bold lg:text-5xl text-2xl'>{bookName}</h1>
                    <p className='font-semibold text-xl'>By: {author}</p>
                    <div className='border-b-2'></div>
                    <p className='font-semibold'>{category}</p>
                    <div className='border-b-2'></div>
                    <p> <span className='font-bold'>Review:</span> {review}</p>
                    <div className='font-bold flex gap-6'>
                        <p>Tag</p>
                        {
                            tags.map((tag, index) => 
                                 <p key={index} className="text-green-500 bg-green-100 px-3 rounded-xl">#{tag}</p>
                            )
                        }
                    </div>
                    <table className="table table-zebra -ml-2 lg:w-2/3 w-full">
                    <tbody> {/* Add this <tbody> tag */}
                        <tr>
                        <td className="text-gray-500 text-[16px]">Number of Pages:</td>
                        <th className="text-black font-bold text-[16px]">{totalPages}</th>
                        </tr>
                        <tr>
                        <td className="text-gray-500 text-[16px]">Publisher:</td>
                        <td className="text-black font-bold text-[16px]">{publisher}</td>
                        </tr>
                        <tr>
                        <td className="text-gray-500 text-[16px]">Year of Publishing</td>
                        <td className="text-black font-bold text-[16px]">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                        <td className="text-gray-500 text-[16px]">Rating:</td>
                        <td className="text-black font-bold text-[16px]">{rating}</td>
                        </tr>
                    </tbody> {/* Close the <tbody> tag */}
                    </table>

                    <div className='gap-5 flex'>
                        <button onClick={() => markAsRead(singleBook.bookId)} className='btn btn-small'>Mark As Read</button>
                        <button onClick={() => addTOwidhList(singleBook.bookId)} className='btn btn-small btn-success text-white'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;