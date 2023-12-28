/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
 
 
import { FaBook } from "react-icons/fa6";
import { useAddBookMutation } from "../../redux/feature/api/apiSlice"; 

import { useState } from "react";
import toast from "react-hot-toast";


const AddNew = () => {
    const [addBook ] = useAddBookMutation()
    const [title, setTitle] = useState<string | undefined>(undefined); 
    const [author, setAuthor] = useState<string | undefined>(undefined);
    const [genre, setGenre] = useState<string | undefined>(undefined);
    const [year, setYear] = useState<string | undefined>(undefined);
    //typescript
 

     const handleSubmit = (e: { preventDefault: () => void; }) => {
        const options ={
            "title": title,
            "author": author,
            "genre":  genre ,
            "year": year !== undefined ? parseInt(year) : undefined 
        }
        // console.log(options);
         addBook(options);
         toast.success("Books added successfully")
        e.preventDefault();
     }
    
  return (
    <form onSubmit={handleSubmit} className="pb-5 px-8 bg-[#07091E] text-white grid grid-cols-12 gap-4">
       <div className="lg:col-span-3 col-span-6"></div>
       <div className="lg:col-span-6 col-span-12">
       <div className="">
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span> 
                    </label> 
                    <input
                    type="text" 
                    placeholder="Book name"  
                    className="input input-bordered w-full p-2 rounded my-2 text-blue-500"  onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>  
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Author</span> 
                    </label> 
                    <input type="text" placeholder="Book author"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500" onChange={(e) => setAuthor(e.target.value)}/>
                </div>
            </div>
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre</span> 
                    </label> 
                    <input type="text" placeholder="Genre"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500" onChange={(e) => setGenre(e.target.value)}/>
                </div>
            </div> 
             <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publication Year</span> 
                    </label> 
                    <input type="number" placeholder="Publication Year"  className="input input-bordered w-full p-2 rounded my-2 text-blue-500" name="year" 
                    onChange={(e) => setYear(e.target.value)}
                    />
                </div>
            </div>  
            
            <div className="col-span-12">
                <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Add Book</span> <FaBook/></button>
            </div>
        </div> 
       </div>
    <div className="lg:col-span-3 col-span-12"></div>
    </form>
  )
}

export default AddNew