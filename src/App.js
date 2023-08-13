import React, { useEffect, useState } from 'react'
import Navbar from "./component/Navbar"
import Filter from "./component/Filter.js"
import Cards from "./component/Cards"
import { apiUrl, filterData } from "./data.js";
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';

const App = () => {

  const [courses , setCourses] = useState([]);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)
  
    const fetchData  = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data
        setCourses(output.data)
      }
      catch(error){
        toast.error("Fetching data failed")
      }
      setLoading(false);
    }

  useEffect(() => {
    fetchData();
  } , [])


  return (
    <div className='min-h-screen bg-bgDark2 flex flex-col'>
      <Navbar/>

      <div className=''>
      <Filter
        filterData = {filterData} 
        category ={category}  setCategory = {setCategory}
       />
       <div className=' max-w-[1200px] max-auto flex flex-wrap items-center justify-center min-h-[50vh]'>
              {
                loading ? (<Spinner/>) : (<Cards courses ={courses} category={category} />)
              }
       </div>

      </div>
      
    </div>
  )
}

export default App