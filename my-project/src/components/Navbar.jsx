import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-center flex items-center'>
      <nav className='flex justify-around bg-violet-500 text-white py-2 w-[80%] rounded-xl'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
