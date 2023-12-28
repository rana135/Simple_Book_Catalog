import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { Toaster } from "react-hot-toast"
import { useAppDispatch } from "./redux/hooks/hooks"
import { useEffect } from "react"
import { setLoading, setUser } from "./redux/feature/user/userSlice"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from "./firebase/firebase"

 
function App() {
  const auth = getAuth(app)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged( auth, (user) => {
      if(user){
        dispatch(setUser(user.email))
        dispatch(setLoading(false))
        console.log("We are seeing user from App.ts", user.email)
      }
    } )
  }, [auth, dispatch])
  return ( 
    <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default App
