import React from 'react'

const Input = ({id, label, onChange, value, type, placeholder, maxLength}) => {
  return (
    <>
        <div className='flex flex-col gap-1 '>
            <label className='text-sm' htmlFor={id}>{label}</label>
            <input onChange={onChange} value={value} className='outline-none rounded-md border-2 py-2 px-3 text-sm ' maxLength={maxLength} id={id} type={type} placeholder={placeholder}/>
        </div>
    </>
  )
}

export default Input