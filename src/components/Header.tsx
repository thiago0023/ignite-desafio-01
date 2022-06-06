import React from 'react'
import brandLogo from '../assets/brand-logo.svg';

export default function Header() {
    return (
        <div className='font-black text-4xl flex justify-center items-center h-[200px] bg-gray-700 text-gray-100'>
            <div>
               <p>.just <span className='text-primary-light'>do</span><span className='text-secondary-light'>it</span></p>
            </div>
        </div>
    )
}
