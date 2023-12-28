/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast"
const Filter = ({setFilter, setdefaultOrder, setSearch} : any) => {
    const handleSubmit = (e : any) => {
        if(e.target.radio.value === "year"){
            setdefaultOrder(false)
            setFilter(true)
            setSearch(false)
            toast.success("Showing Filtered Data")

        }else if(e.target.radio.value === "allBooks"){
            setdefaultOrder(true)
            setFilter(false)
            setSearch=(false)
        }
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className="">
      <h1 className="mb-6 pt-6 mx-auto font-bold text-2xl">Filter Your Book</h1>

        <div className="flex">
            <div className="flex items-center mr-4 mb-4">
                <input id="radio1" type="radio" name="radio" className=""  value="allBooks"/>
                <label htmlFor="radio1" className="pl-3 flex items-center cursor-pointer"> 
                All Books By Default</label>
            </div>
            
            <div className="flex items-center mr-4 mb-4">
                <input id="radio2" type="radio" name="radio" className="" value="year"/>
                <label htmlFor="radio2" className="pl-3 flex items-center cursor-pointer">Filter By Year</label>
            </div>
       </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filter</button>
     </form>
  )
}

export default Filter