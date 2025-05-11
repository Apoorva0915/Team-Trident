import React from 'react'
import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false);
    const [token, setToken] = React.useState(true);

    return (
        <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400'>
            <h1 className='w-44 cursor-pointer text-5xl text-blue-900' >FindYDoc</h1>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/">
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img src={assets.profile_pic} alt="user" className='w-8 rounded-full' />
                            <img src={assets.dropdown_icon} alt="arrow" className='w-2' />
                    </div> 
                    :<button  onClick={()=>navigate('/login')} className="bg-blue-400 text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
            }
            </div>
        </div>
    )
}

export default Navbar