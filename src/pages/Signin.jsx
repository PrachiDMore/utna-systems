import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <section className='w-[100vw] h-[100vh] flex Nunito'>
                <div className='w-[50%] h-screen flex flex-col justify-center p-24'>
                    <h1 className='text-3xl font-bold '>UTNA Systems</h1>
                    <p className='text-gray-500 text-sm'>Welcome back! Please enter your details.</p>
                    <div className='pt-6 flex flex-col w-full gap-3'>
                        <Input label={'Email:'} id={'email'} type={'email'} placeholder={'Enter you email.'} />
                        <Input label={'Password:'} id={'password'} type={'password'} placeholder={'Enter you password.'} />
                    </div>
                    <div className='text-sm flex justify-between py-4'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p>Remember me</p>
                        </div>
                        <Link className='text-gray-500'>Forgot password?</Link>
                    </div>
                    <button className='bg-black text-white py-2 text-sm rounded-md' type='button'>Login</button>
                    <div className='text-sm flex gap-2 justify-center pt-4'>
                        <p>Don't have an account?</p>
                        <Link className='text-gray-500'>Create Account</Link>
                    </div>
                </div>
                <div className='w-[50%] h-screen loginBg'>

                </div>
            </section>
        </>
    )
}

export default Signin