import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <h1 className='mb-5 w-40 text-5xl text-blue-900'>FindYDoc</h1>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Magni eius quam quo similique commodi. Fugiat, animi ducimus. Praesentium
                        dolorum saepe incidunt rem, sed nesciunt eius nisi, voluptate porro earum consequuntur?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>FindYDoc@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* Centered copyright below the grid */}
            <div className='text-center border-t border-gray-300 py-5 text-sm text-gray-600'>
                &copy; 2025 FindYDoc – All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
