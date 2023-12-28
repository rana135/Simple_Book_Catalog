/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
 
import { useAppDispatch } from "../../redux/hooks/hooks";
import { removeOne } from "../../redux/feature/cart/cartSlice";
import toast from "react-hot-toast";


const SingleWishList = ({book}: any) => {
    const dispatch = useAppDispatch();
    return ( 
      
    <tr className="py-2">
        <td className="p-1">{book.title}</td>
        <td className="p-1"><Link to={`/singlebook/${book._id}`} className="text-[#0000ff] font-bold">Click Here To Read</Link></td>
        <td className="p-1"><button className="btn btn-ghost btn-xs text-2xl" onClick={() => {
            dispatch(removeOne(book))
            toast.success("Item Remove From WishList successfully")
        }}>
             <BsFillTrashFill/>
            </button>
            </td> 
    </tr> 
    );
};

export default SingleWishList;  

{/* <tr>
      <td>{book.title}</td>
      <td><Link to={`/singlebook/${book._id}`}>Click Here To Read</Link></td>
      <td><button onClick={() => {
        alert("Rmeoved")
      }}>Remove</button></td>
    </tr>  */}