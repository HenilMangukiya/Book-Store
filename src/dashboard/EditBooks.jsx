import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    "Fiction", "Non-Fiction", "History", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Autobiography", "Self-help", "Memoir", "Business",
    "Children Books", "Travel", "Art and Design", "Religious",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBookObj = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.categoryName.value,
      bookDescription: form.bookDescription.value,
      bookPdfURL: form.bookPdfURL.value
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"  // Corrected typo from "Content Type" to "Content-Type"
      },
      body: JSON.stringify(updatedBookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Updated Successfully!!");
    })
    .catch(error => {
      console.error('Error updating book:', error);
      alert("Failed to update book. Please try again.");
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="bookTitle" value="Book Title" />
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Enter the Book Title" required defaultValue={bookTitle} />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name="authorName" type="text" placeholder="Enter the Author Name" required defaultValue={authorName} />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <Label htmlFor="imageURL" value="Book Image URL" />
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required defaultValue={imageURL} />
          </div>
          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <select name="categoryName" id="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>
        <div>
          <Label htmlFor="bookDescription" value="Book Description" />
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write Your Book Description..." required rows={6} className="w-full" defaultValue={bookDescription} />
        </div>
        <div>
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
          <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Enter the URL" required defaultValue={bookPDFURL} />
        </div>
        <Button type="submit" className="bg-blue-700 mt-5">Update Book</Button>
      </form>
    </div>
  );
};

export default EditBooks;
