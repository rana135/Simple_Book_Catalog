import bookImg from "../../assets/book.jpeg";
import {  useAppSelector } from "../../redux/hooks/hooks";
import SingleWishList from "./SingleWishList";

const WishList = () => {
     
    const { products } = useAppSelector((state) => state.cart);
    
  return (
    <div className="hero bg-[#07091E] text-white w-full py-6">
       <div className="py-3 mb-8">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">Wish List</h1>
             <p className="lg:pt-6 pt-3 text-center">Here is your all wish list books</p></div>     
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="lg:col-span-5 col-span-12">
          <img src={bookImg} alt="bookImg" />
        </div>
        <div className="lg:col-span-6 col-span-12 card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ml-6">
        <table className="table-fixed text-center">
  <thead>
    <tr className="py-4 px-6 text-2xl text-blue-500">
      <th>Book Name | </th>
      <th>Read Now | </th>
      <th>Remove </th>
    </tr>
  </thead>
  <tbody>
    {
        products?.map(book => <SingleWishList book={book} key={book._id}/>)
    }
  </tbody>
</table>
          
        </div>
      </div>
    </div>
  )
}

export default WishList