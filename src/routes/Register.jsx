import { Input } from '@nextui-org/react'
import React from 'react'

const Register = () => {
  const handleRequest = (e) => {
        e.preventDefault()
        console.log('Form submitted');
        alert('Uspješna registracija, molimo strpite se za dalje funkcionalnosti!');
  }
  return (
    <>
    <div className="h-[8vh]"></div>
    <div className='max-w-6xl mx-auto px-5 my-10'>
        <h1 className='text-4xl font-bold'>Register</h1>
        <form className='flex flex-col gap-7 mt-7' onSubmit={handleRequest}>
            <Input placeholder='Ime i prezime' label='Ime i prezime' labelPlacement='outside' />
            <Input placeholder='Email' label='Email' labelPlacement='outside' />
            <Input placeholder='Država' label='Država' labelPlacement='outside' />
            <Input placeholder='Grad' label='Grad' labelPlacement='outside' />
            <Input placeholder='Lozinka' type='password' label='Korisnička lozinka' labelPlacement='outside' />
            
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>Pošalji</button>
        </form>
    </div>
    </>
  )
}

export default Register