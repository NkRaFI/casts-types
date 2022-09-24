import React from 'react';
import catTypes from '../../assets/casts-types-logo2.png';
import whitePlusIcon from '../../assets/white-plus-icon.png'

const Navbar = () => {
    return (
        <section className='relative'>
            <div className='absolute top-0 w-full z-10'>
                <nav className='custom-container grid grid-cols-12 bg-[#212219]/[0.5] backdrop-blur-sm py-4'>
                    <div className='col-span-9 grid grid-cols-12 items-center divide-x'>
                        <div className='col-span-3 cursor-pointer'><img className='' src={catTypes} alt="" /></div>
                        <div className='col-span-6 text-start flex gap-8 items-center text-gray-200 h-full pl-8'>
                            <p className='text-xl cursor-pointer text-amber-400 font-semibold'>Performers</p>
                            <p className='text-xl cursor-pointer font-light'>Film Makers</p>
                            <p className='text-xl cursor-pointer font-light'>Organizations</p>
                        </div>
                        <div className="col-span-3 flex gap-8 items-center text-gray-200 h-full pl-8">
                            <p className='text-xl cursor-pointer font-light'>About</p>
                            <p className='text-xl cursor-pointer font-light'>Sponsors</p>
                        </div>
                    </div>
                    <div className="col-span-3 grid items-center justify-end">
                        <div>
                            <button className='flex gap-3 items-center justify-center bg-green-500 py-4 px-5 rounded-md'>
                                <span className="text-white text-base font-semibold">JOIN WAITLIST</span>
                                <img src={whitePlusIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;