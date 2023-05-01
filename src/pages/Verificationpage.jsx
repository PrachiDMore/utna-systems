import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

const Verificationpage = () => {
  return (
    <>
      <section className='w-[100vw] h-[100vh] flex Nunito'>
        <div className='w-[50%] h-screen flex flex-col justify-center p-24'>
          <h1 className='text-3xl font-bold pb-4'>UTNA Systems</h1>
          <h1 className='text-2xl font-semibold '>Verify OTP to login</h1>
          <p className='text-gray-500 text-sm'>Enter the 6 digit code that was sent to your phone number!</p>
          <p className='text-sm pt-4'>Enter your OTP</p>
          <div className='flex gap-3 pt-2 pb-7'>
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
            <input className='w-[35px] outline-none text-center rounded-md border-2 py-2 px-3 text-sm numberbtn' maxLength={1} id='otp' type="number" />
          </div>
          <button className='bg-black text-white py-2 text-sm rounded-md' type='button'>Verify OTP</button>
          <div className='text-sm flex gap-2 justify-center pt-4'>
            <p>Didn't received OTP?</p>
            <Link className='text-gray-500'>Resend OTP</Link>
          </div>
        </div>
        <div className='w-[50%] h-screen loginBg'>

        </div>
      </section>
    </>
  )
}

export default Verificationpage