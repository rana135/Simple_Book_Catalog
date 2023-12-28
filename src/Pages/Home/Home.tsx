/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/feature/api/apiSlice";
import SingleBook from "./SingleBook" 
import { useAppSelector } from "../../redux/hooks/hooks";

 
const Home = () => {
    const { data } = useGetAllBooksQuery(null, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000    
    }
  );

    const user = useAppSelector((state) => state.user)
    console.log("User is fffff:", user);
 
  return (
    <div>
        <section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">A World of Literature</h2>

      <p className="mt-4 text-gray-300">
      Welcome to our diverse collection of literary wonders. From gripping mysteries to heartwarming romances, immerse yourself in a world of stories that transport and inspire. Our catalog features an array of genres, from thrilling adventures to thought-provoking narratives, ensuring there's something for every reader. Dive into these pages and embark on unforgettable journeys crafted by talented authors. Start exploring today!
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> 
      
        {
            data?.data.slice(0, 10).map((book : any, index : any) => <SingleBook key={index} book={book}/>)
        }        
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/allbooks"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        All Books
      </Link>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home