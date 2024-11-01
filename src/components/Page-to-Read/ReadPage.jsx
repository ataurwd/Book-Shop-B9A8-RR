import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreList } from '../../utility/AddToDo';
import Book from '../Home/Book';


const ReadPage = () => {
    const [book, setBook] =useState([])
    const [sort, setSort] =useState('')
    const bookData = useLoaderData()
    useEffect(() => {
        const storedData = getStoreList()
        const bookNumberId = storedData.map(id => parseInt(id)) 
        const readBookData = bookData.filter(book => bookNumberId.includes(book.bookId))
        setBook(readBookData)
    }, [])
    

    const handelSort = sortType => {
        setSort(sortType)

        if(sortType === 'ratings'){
            const sortByRatings = [...book].sort((a, b) => b.rating - a.rating );
            setBook(sortByRatings)
        }
        if(sortType === 'book-page'){
            const sortByRatings = [...book].sort((a, b) => b.totalPages - a.totalPages );
            setBook(sortByRatings)
        }
    }
    return (
        <div className='lg:px-20 lg:py-10'>
            <h1 className='lg:py-10 text-center font-bold lg:text-3xl text-xl bg-slate-300 rounded-xl my-5'>Books</h1>
            <div className="dropdown  justify-end flex ">
            <div tabIndex={0} role="button" className="btn m-1 bg-sky-400">
                {
                    sort ? `filter: ${sort}` : 'filter'
                }
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-10">
                <li onClick={() => handelSort('ratings')}><a>ratings</a></li>
                <li onClick={() => handelSort('book-page')}><a>book-page</a></li>
            </ul>
            </div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                {/* mark as book data here */}
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
                    {
                        book.map(book => <Book key={book.bookId} book={book}/>)
                    }
                    </div>
                </TabPanel>


                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadPage;