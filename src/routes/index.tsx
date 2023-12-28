import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Allbooks from "../Pages/Allbooks/Allbooks";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Signup/Singup";
import AddNew from "../Pages/AddNew/AddNew";
import SingleBook from "../Pages/SingleBook/SingleBook";
import WishList from "../Pages/WishList/WishList";
import PrivateRoute from "../Shared/PrivateRoute/PrivateRoute";
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/allbooks",
          element: <Allbooks/>,
        },{
          path: "/login",
          element: <Login/>,
        },{
          path: "/signup",
          element: <Singup/>,
        },
        {
          path: "/addnew",
          element: <PrivateRoute><AddNew/></PrivateRoute>,
        },
        {
          path: "/singlebook/:id",
          element: <SingleBook/>,
        },
        {
          path: "/wishlist",
          element: <WishList/>,
        },
      ],
    },
  ]);


export default router;