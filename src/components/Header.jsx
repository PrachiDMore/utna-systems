import React from 'react'
import {FiBell, FiSettings} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'

const Header = () => {
  return (
    <>
        <nav className='Nunito h-20 flex items-center gap-x-3 shadow-lg'>
            <div className='px-14 w-[20%] font-bold text-3xl'>UTNA</div>
            <ul className='flex justify-around items-center w-[55%]'>
                <li>My Dashboard</li>
                <li>Marketplace</li>
                <li>Easy Search</li>
                <li>Help</li>
            </ul>
            <div className='w-[5%] flex justify-center'>
                <span className='h-[35px] w-[35px] rounded-lg flex items-center justify-center bg-black'><FiBell className='text-white'/></span>
            </div>
            {/* <div className='w-[10%] flex justify-center p-3 text-white rounded-lg'>Business</div> */}
            <div className='h-full px-6 text-white py-2 w-[20%] flex items-center gap-2 bg-black'>
                <div className='flex items-center justify-center'>
                    <img className='h-[40px] w-[40px] rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/infilate-a6bdc.appspot.com/o/users%2Ftt6flvUONjPNVmkXeJG62wrEcOU2.jpg?alt=media&token=cb595051-57ac-46b9-9979-2bb0d1b8fd28" alt="" />
                </div>
                <div className='ml-4'>
                    <div className='font-bold'>Santosh Kottari</div>
                    <div className='text-xs'>Profile completed - 85%</div>
                </div>
                {/* <div><FiSettings/></div> */}
            </div>
        </nav>
    </>
  )
}

export default Header