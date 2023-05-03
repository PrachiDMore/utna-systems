import React from 'react'

const Sidebar = () => {
  return (
    <>
        <div className='shadow-lg w-[20%] p-10 sidebar-height '>
          <button className='bg-black text-white my-2 w-full p-2 rounded-md shadow-md'>Personal</button>
          <button className='bg-black text-white my-2 w-full p-2 rounded-md shadow-md'>Business</button>
          <button className='bg-black text-white my-2 w-full p-2 rounded-md shadow-md'>Manufacture</button>
          <button className='bg-black text-white mt-14 w-full p-2 rounded-md shadow-md'>Reseller</button>
        </div>
    </>
  )
}

export default Sidebar