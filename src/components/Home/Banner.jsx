import React from 'react';
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero lg:bg-base-200 lg:h-[500px] h-auto mt-14 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img 
            src={BannerImg}
            className="lg:max-w-sm rounded-lg shadow-2xl w-full" />
            <div className='lg:w-1/2 w-full lg:text-left text-center'>
            <h1 className="lg:text-5xl text-3xl font-bold">Books to freshen <br /> up your bookshelf</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">View The List</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;