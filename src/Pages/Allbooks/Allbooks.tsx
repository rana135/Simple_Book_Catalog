/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useGetAllBooksQuery, useGetBySearchBooksQuery, useGetByYearBooksQuery } from "../../redux/feature/api/apiSlice";
import SingleBook from "../Home/SingleBook";
import Filter from "./Filter";
import Search from "./Search";

const Allbooks = () => {
   const [defaultOrder, setdefaultOrder] = useState(true);
   const [filter, setFilter] = useState(false);
   const [search, setSearch] = useState(false);
   
   const [searchData, setSearchData] = useState("");

    const { data } = useGetAllBooksQuery(null, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000    
    });
    const { data: dataByYear } = useGetByYearBooksQuery(null, {
      refetchOnMountOrArgChange: true,
      pollingInterval: 5000    
    });
    
    const { data: dataBySearch  } = useGetBySearchBooksQuery(searchData);

  return (
    <section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">All Books</h2>
    </div>
    
    <div className="grid grid-cols-12 py-6">
    <div className="lg:col-span-8 col-span-12">
      <Filter 
        setFilter={setFilter}
        setdefaultOrder={setdefaultOrder}
        setSearch={setSearch}
        />
      </div>
      <div className="lg:col-span-4 col-span-12">
        <Search
          setFilter={setFilter}
          setdefaultOrder={setdefaultOrder}
          setSearch={setSearch}
          setSearchData={setSearchData}
        />
      </div>
    </div>


    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> 
      
        {
            defaultOrder && data?.data.map((book:any, index:any) => <SingleBook key={index} book={book}/>)
        } 
        {
            filter && dataByYear?.data.map((book:any, index:any) => <SingleBook key={index} book={book}/>)
        }
        {
            search && dataBySearch?.data.map((book:any, index:any) => <SingleBook key={index} book={book}/>)
        }        
    </div>

  </div>
</section>
  )
}

export default Allbooks