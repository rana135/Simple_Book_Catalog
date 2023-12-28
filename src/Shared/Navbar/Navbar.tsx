import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import LoadingButtonIcons from './../../assets/icons/LoadingButtonIcons';
import CustomLinks from "../CustomLink/CustomLInk";
import { useAppSelector } from "../../redux/hooks/hooks";
 
import { signOut } from "firebase/auth"; 
import { auth } from "../../redux/feature/user/userSlice";
import { AiFillHeart } from "react-icons/ai";



const Header = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const user = useAppSelector((state) => state.user)
   
  const { products } = useAppSelector((state) => state.cart); 
  const loading = false 

  const handleLogOut = () => {
    signOut(auth).then(() => {
      window.location.reload();
    }).catch((error) => {
      console.log(error, "from logout");
    });
  }
 
  // email name show as dispaly name
  //beforeAtSymbol?.substring(0, beforeAtSymbol.indexOf('@'));
   
  const tempEmail = user?.user.email;
  const displayName = tempEmail?.substring(0, tempEmail.indexOf('@'));
   

  return (
    <nav className="z-[60] sticky top-0 p-4 text-white bg-[#07091E] ">
      <div className="container mx-auto p-1 relative">
        <div className="md:flex md:justify-between md:items-center">
          {/* first part */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
            />
            <div className="mx-auto">
              
                <CustomLinks to="/">
                <h3 className="text-2xl font-bold text-white">
                  <span className="relative">
                     SimpleBookCatalog
                    <span className="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"></span>
                   </span>
                  </h3>
                  </CustomLinks>
            </div>
          </div>
          {/* second part */}
          <ul className="hidden lg:flex lg:items-center font-semibold space-x-10">
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
              <CustomLinks to="/">Home</CustomLinks>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
              <CustomLinks to="/allbooks">All Books</CustomLinks>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
              <CustomLinks to="/addnew">Add New Book</CustomLinks>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
              <CustomLinks to="/signup">Sign Up </CustomLinks>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
              <CustomLinks to="/wishlist"><span className="text-center">Wish List <span className="flex"><AiFillHeart/> <span>+{products?.length | 0}</span></span></span></CustomLinks>
              </span>
            </li>
          </ul>
          {/* third part space-x-4 hidden md:block */}
          <div className="hidden md:flex space-x-4"> 
            <div className="text-lg font-bold mt-2 uppercase">{displayName || "anonymous"}</div>
             <div>
                {/* conditioning outLout and SignIn button*/}
                {user?.user.email ? 
                <button
                onClick={ () => handleLogOut()} 
                className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"> { loading && <LoadingButtonIcons/>} Log Out</button> : 
                <Link to='/login' className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD] pt-2">
                  { loading && <LoadingButtonIcons/>} Signin
                </Link>
                }
                {/* conditioning outLout and SignIn button*/}
             </div>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={`lg:hidden bg-[#001356] text-white w-[280px] md:w-[260px] h-screen absolute ${open
            ? "-top-2 -left-2 transition-all duration-700 "
            : "top-0 -left-full transition-all duration-1000 delay-300"
            }`}
        >
          <div className="bg-white p-[17px] flex justify-between items-center">
            <span className="cursor-pointer"> 
              <Link to="/">
                <h3 className="text-2xl font-bold text-white">
                  <span className="relative bg-slate-800">
                    SimpleBookCatalog
                    <span className="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x"></span>
                   </span>
                  </h3>
              </Link> 
            </span>
            <IoIosClose
              className="text-3xl text-[#001356] font-bold cursor-pointer transition-all duration-200"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li
              className=""
              style={{ borderBottom: "1px solid #F8908B" }}
            >
              <div
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="p-3"
              >
                <NavLink to="/">Home</NavLink>
              </div>
              {/* submenu */}
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="p-3"
            >
              <NavLink to="/allbooks">allbooks </NavLink>
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="p-3"
            >
              <NavLink to="/addnew">addnew</NavLink>
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              {user && <div className="text-md font-bold uppercase">
                {displayName || "Anynamos"}  
              </div>}
              {/* conditioning outLout and SignIn button*/}
            {user?.user.email ? 
            <button
            onClick={ () => () => handleLogOut()} 
            className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"> { loading && <LoadingButtonIcons/>} Log Out</button> : 
            <Link to='/signin' className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
              { loading && <LoadingButtonIcons/>} Signin
            </Link>
            }

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header