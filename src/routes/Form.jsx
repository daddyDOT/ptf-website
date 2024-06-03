import { Input } from '@nextui-org/react'
import React from 'react'

const Form = () => {
  const handleRequest = (e) => {
        e.preventDefault()
        console.log('Form submitted');
        alert('Uspješna prijava!');
  }
  return (
    <>
    <div className="h-[8vh]"></div>
    <div className='max-w-6xl mx-auto px-5 my-10'>
        <h1 className='text-4xl font-bold'>Login</h1>
        <form className='flex flex-col gap-7 mt-7' onSubmit={handleRequest}>
            <Input placeholder='Ime i prezime' label='Ime i prezime' labelPlacement='outside' />
            <Input placeholder='Lozinka' type='password' label='Korisnička lozinka' labelPlacement='outside' />
            
            
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>Pošalji</button>
        </form>
    </div>
    </>
  )
}

export default Form