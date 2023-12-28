import { useNavigate, useParams } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { useDeleteBookMutation, useGetSingleBookQuery } from "../../redux/feature/api/apiSlice";
import toast from "react-hot-toast";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form"; 
import { addToComment } from "../../redux/feature/review/reviewSlice";
import SingleReview from "./SingleReview";
interface IFormInput {
  review: string
}

const SingleBook = () => { 
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const [deleteBook, { isLoading: deleteIsloading }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0)
  const user = useAppSelector((state) => state.user)
  const review = useAppSelector((state) => state.review)
  const dispatch = useAppDispatch();
  
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    
    const reviewData = {
      email: user?.user.email,
      review : data.review,
      rating: rating,
      quantity: 0
    } 
    dispatch(addToComment(reviewData)); 
    toast.success("Review Added")
  }
  console.log("review", review);
  return (
    <section className="bg-gray-900 text-white">
      {
        isLoading || deleteIsloading && <Loader show={true}/>
      }
      <h1 className="text-center text-[#fff] lg:text-4xl text-2xl py-5">Book Details</h1>
      <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 text-center"
        
      >
          <div className="flex justify-center"><FaBook/> </div>   
          <h2 className="mt-4 text-2xl font-bold text-white">{data?.data?.title}</h2>
            <h2 className="mt-1 text-xl font-bold text-white">Author: {data?.data?.author}</h2> 
            <p className="mt-1 text-sm text-gray-300">Genre: {data?.data?.genre}</p>
            <p className="mt-1 text-sm text-gray-300">Year: {data?.data?.year}</p> 
        
    </div> 
      <div className="py-8 flex justify-around text-center">
                  <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Edit Book</span> <FaBook/></button>


                  <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You are wants to delete it",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, Delete it",
                    })
                    .then((result) => {
                      if (result.isConfirmed) { deleteBook(id)
    toast.success("Book Delete successfully")
    navigate("/")     }
                    })
                    
                  }}  
                  ><span className="mr-2">Delete Book</span> <FaBook/></button>
    </div>
    
    
    <div className="px-6 p-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-6 col-span-12">
              <h3 className="font-bold lg:text-4xl text-2xl mb-4">Add A Review</h3>
            <div>
              <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-5"> 
      <textarea {...register("review", { required: true, maxLength: 20 })} 
      className="text-blue-500 rounded py-4 w-full"/>
      <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  />
    </form>

          </div>
          <div className="lg:col-span-6 col-span-12">
          <h1 className="text-center text-[#fff] lg:text-2xl text-xl py-5">Total ReView { review?.review?.length || 0}</h1>
            {review?.review.map(data => <SingleReview data={data}/>) }      
          </div>
        </div>
    </div>

   </section>
  )
}

export default SingleBook