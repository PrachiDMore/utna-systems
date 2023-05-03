import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <section className='w-[100vw] h-[100vh] flex Nunito'>
                <div className='w-[50%] h-screen flex flex-col justify-center px-32'>
                    <h1 className='text-3xl font-bold '>UTNA Systems</h1>
                    <p className='text-gray-500 text-sm'>Create Account! Please enter your details.</p>
                    <div className='pt-6 flex flex-col w-full gap-3'>
                        <Input label={'Email:'} id={'email'} type={'email'} placeholder={'Enter you email.'} />
                        <Input label={'Password:'} id={'password'} type={'password'} placeholder={'Enter you password.'} />
                        <Input label={'Confirm Password:'} id={'confpassword'} type={'password'} placeholder={'Confirm you password.'} />
                    </div>
                    <button className='mt-5 bg-black text-white py-2 text-sm rounded-md' type='button'>Create Account</button>
                    <div className='text-sm flex gap-2 justify-center pt-4'>
                        <p>Already have an account?</p>
                        <Link className='text-gray-500' to='/signin'>Login</Link>
                    </div>
                </div>
                <div className='w-[50%] h-screen loginBg'>

                </div>
            </section>
        </>
    )
}

export default Signup