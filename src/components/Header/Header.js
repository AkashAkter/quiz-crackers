import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav>

            <div>
                <Link to='/' className='main-name'>Queezy</Link>
            </div>

            <div onClick={() => setOpen(!open)} className='bar-icon'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />

                }
            </div>


            <div className={`nav-links ${open ? 'position1' : 'position2'}`} >
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>

            </div>

        </nav>
    );
};

export default Header;