import React, { useState, useEffect } from "react";
import { 
    MdDashboardCustomize,
    MdContactMail,
    MdCastForEducation,
    MdEmail
} from "react-icons/md";
import { FaUser, FaBars } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <MdDashboardCustomize />
        },
        {
            path: '/about',
            name: 'About',
            icon: <FaUser />
        },
        {
            path: '/skills',
            name: 'Skills',
            icon: <MdContactMail/>
        },
        {
            path: '/experience',
            name: 'Experience',
            icon: <BsGraphUpArrow/>
        },
        {
            path: '/projects',
            name: 'Projects',
            icon: <GoProjectSymlink />
        },
        {
            path: '/education',
            name: 'Education',
            icon: <MdCastForEducation />
        },
        {
            path: '/contact',
            name: 'Contact',
            icon: <MdEmail/>
        }
    ];

    return (
        <div className="fixed h-full">
            <div className={` bg-white shadow-2xl h-full transition-all duration-500 z-20 ${isOpen ? 'w-[250px]' : 'w-[60px]'}`}>
                <div className="top-section flex items-center py-5">
                    <div>
                        <h1 className="text-[#008073] text-2xl font-bold lg:block hidden px-4">Niamat Ullah Khan</h1>
                        <h4 className="text-xl pb-2 lg:block hidden px-8">Frontend Developer</h4>
                        <hr/>
                        <div className="bars text-[30px] py-3 lg:hidden flex px-[15px]">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                </div>
                {
                    menuItems.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className={({ isActive }) => 
                              `link flex text-black px-[15px] py-[10px] gap-3 transition-all duration-500 hover:bg-[#008073] hover:text-white ${isActive ? 'bg-[#008073] text-white' : ''}`
                            }
                        >
                            <div className="icon text-[30px]">{item.icon}</div>
                            <div className={`linkText text-[20px] ${isOpen ? 'flex' : 'hidden'}`}>
                              {item.name}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}
