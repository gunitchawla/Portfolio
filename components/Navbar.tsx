'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const navLinks = [
        { id: 'about', title: 'About' },
        { id: 'work', title: 'Work' },
        { id: 'contact', title: 'Contact' },
    ];

    return (
        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/20 backdrop-blur-md">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Gunit &nbsp;
                        <span className="sm:block hidden">| Full Stack Developer</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? 'text-white' : 'text-secondary'
                                } hover:text-white text-[18px] font-medium cursor-pointer text-gray-300`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div onClick={() => setToggle(!toggle)} className="cursor-pointer text-white">
                        {toggle ? <X /> : <Menu />}
                    </div>

                    <div
                        className={`${!toggle ? 'hidden' : 'flex'
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-gray-900 border border-gray-800`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? 'text-white' : 'text-secondary'
                                        } font-poppins font-medium cursor-pointer text-[16px] text-gray-300`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
