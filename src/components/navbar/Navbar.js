import React from 'react';
import catTypes from '../../assets/casts-types-logo2.png';

const Navbar = () => {
    return (
        <nav className='custom-container bg-gray-600/[0.5] backdrop-blur-sm z-10 py-4'>
            <div><img className='' src={catTypes} alt="" /></div>
            {/* <div><h3 className='text-xl font-semibold text-start'>Cast Types</h3></div> */}
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </nav>
    );
};

export default Navbar;