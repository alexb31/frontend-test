import Link from 'next/link'
import React from 'react'

const Button = () => {
    return (
        <Link href="/">
            <button type='button' className='text-white max-w-[118px] w-full bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2q'>S'inscrire</button>
        </Link>
    )
}

export default Button