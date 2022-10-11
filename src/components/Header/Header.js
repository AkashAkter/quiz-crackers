import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
                <Link to='/' className='main-name'>Take Quiz</Link>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>

            </div>

        </nav>
    );
};

export default Header;