import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Art and Design",
    "Religious",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
    }

    console.log(bookObj)

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-warp gap-4">
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Enter the Book Title" required />
      </div>
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Enter the Author Name" required />
      </div>
      </div>
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
      </div>
      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <select name="categoryName" id="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
       
      </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write Your Book Description..." required rows={6} className="w-full" />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
        </div>
        <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Enter Book PDF URL" required />
      </div>

      
      
      <Button type="submit" className="bg-blue-700 mt-5">Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook