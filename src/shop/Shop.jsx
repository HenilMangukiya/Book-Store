import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>
            <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {books.map(book => (
                    <Card key={book.id}>
                        <img src={book.imageURL} alt="" className='h-96' />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {book.bookTitle}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {/* Add other book details here if needed */}
                        </p>
                        <button className='bg-blue-700 font-semibold text-white py-2 rounded' style={{ marginTop: '10px' }}>
                            <Link to={book.bookPdfURL}>Buy Now</Link> {/* Link dynamically to bookPdfURL */}
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Shop;
