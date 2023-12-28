/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import toast from "react-hot-toast";

const Search = ({setFilter, setdefaultOrder, setSearch, setSearchData}: any) => {
    const handleSearch = (e : any) => {
        const searchQuery = e.target.search.value;
        setSearchData(searchQuery);
        console.log(searchQuery);
            setdefaultOrder(false)
            setFilter(false)
            setSearch(true)
            toast.success("Showing Search Data")
        e.preventDefault();
    }
  return (
  <form className="overflow-hidden" onSubmit={handleSearch}>
    <h1 className="mb-6 pt-6 mx-auto font-bold text-2xl">Search Your Book By Genre</h1>
    <div className="border rounded flex">
    <input type="text" className="px-4 py-2 text-violet-500 w-full" placeholder="love" name="search"/>
    <button className="flex items-center justify-center px-4 border-l" type="submit">
      <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
    </div>
  </form>

  )
}

export default Search