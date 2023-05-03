import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

const Verificationpage = () => {
	return (
		<>
			<section className='w-[100vw] h-[100vh] flex Nunito'>
				<div className='w-[50%] h-screen flex flex-col justify-center px-32'>
					<h1 className='text-3xl font-bold pb-4'>UTNA Systems</h1>
					<h1 className='text-2xl font-semibold '>Verify OTP to login</h1>
					<p className='text-gray-500 text-sm mb-3'>Enter the 6 digit code that was sent to your phone number!</p>
					<Input label={'Enter your OTP'} id={'email'} type={'email'} placeholder={'Enter you email.'} />
					<Link to='/dashboard' className='mt-5 bg-black text-white py-2 text-sm rounded-md' type='button'>Verify OTP</Link>
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