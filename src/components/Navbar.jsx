import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className=" fixed w-full">
            <di>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center space-x-4 cursor-pointer">

                        <img src="./src/assets/img/logo-square.jpg" alt="Your Company" class="h-20 w-auto rounded-lg " />
                        <h1 className=" text-5xl font-bold text-red-500 mix-blend-multiply italic">AFC</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-brightColor transition-all cursor-pointer'>Home
                        </Link>
                        <div className="relative group">
                            <div className=" flex items-center gap-1">
                                <Link
                                    to="dishes"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className='hover:text-brightColor transition-all cursor-pointer'>Dishes
                                </Link>
                                <BiChevronDown className="cursor-pointer" size={25} />
                            </div>

                            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                                <li>
                                    <Link
                                        to="dishes"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        Vada Pav
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="dishes"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                        style={{ whiteSpace: 'nowrap' }}
                                    >
                                        French Fries
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="dishes"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                                    >
                                        Burger
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="menu"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-brightColor transition-all cursor-pointer'>Menu
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='hover:text-brightColor transition-all cursor-pointer'>About
                        </Link>
                    </nav>
                    <div className="md:hidden flex items-center">
                        {menu ?
                            (<AiOutlineClose size={25} onClick={handleChange} />) :
                            (<AiOutlineMenuUnfold size={25} onClick={handleChange} />)
                        }
                    </div>
                </div>
                <div className={` ${menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-black text-white left-0 top-25 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    ></Link>
                    <Link
                        to="dishes"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Dishes
                    </Link>
                    <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>Menu
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'>About
                    </Link>
                </div>
            </di>
        </div>
    )
}
export default Navbar;