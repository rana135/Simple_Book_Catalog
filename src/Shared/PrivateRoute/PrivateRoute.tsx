/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom"

import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/hooks/hooks";

const PrivateRoute = ({children} : any) => {
    const user = useAppSelector((state) => state.user)
    let location = useLocation();
    
    setTimeout(() => {
        <Loader show={true}/>
      }, 3000);
    if (user?.user.email) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default PrivateRoute