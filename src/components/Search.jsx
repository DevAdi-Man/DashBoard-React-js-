import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const Search = () => {
  return (
    <div className='flex items-center w-full'>
        {/* icon */}
        <form action="" className='flex w-1/2 items-center border-1 border-[#C3D4E9] rounded-4xl p-2 px-4 gap-4 '>
            <IoSearchSharp className='text-[#596780]' size={32}/>
            <input type="text" placeholder='Search...' className='outline-none border-none w-full text-[#596780]' />
        </form>
    </div>
  )
}

export default Search