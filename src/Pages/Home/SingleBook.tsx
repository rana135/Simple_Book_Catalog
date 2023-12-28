/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { addToCart } from "../../redux/feature/cart/cartSlice";
import toast from "react-hot-toast";

const SingleBook = ({book}: any) => {
  const dispatch = useAppDispatch()
  return (
    <div>
    <Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        to={`/singlebook/${book._id}`}
      >
        
        <FaBook/>  
    
        <h2 className="mt-4 text-xl font-bold text-white">{book.title}</h2>
        <h2 className="mt-1 text-md font-bold text-white">Author: {book.author}</h2>
        <div className="flex justify-between">
            <p className="mt-1 text-sm text-gray-300">Genre: {book.genre}</p>
            <p className="mt-1 text-sm text-gray-300">Year: {book.year}</p>
        </div>
    </Link> 
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"
    onClick={() => {
      dispatch(addToCart(book))
      toast.success("Book Added successfully in wishlist")
    }}>
        <div className="flex items-center">
        <span className="mr-2">Add to wishList</span> <AiFillHeart/>
        </div>
        </button>
    </div> 
  )
}

export default SingleBook