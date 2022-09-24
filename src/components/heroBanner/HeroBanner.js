import React from 'react';
import videoIcon from '../../assets/video-icon.png'

const HeroBanner = () => {
    return (
        <section className={`relative hero-banner z-[5] bg-[url('/src/assets/hero-banner.png')] w-full bg-no-repeat bg-cover h-screen grid place-content-center`}>
            <div className='flex items-center gap-12'>
                <div className='h-16 w-16 bg-blue-500 rounded-full grid place-content-center mt-7'>
                    <img className='w-[19px]' src={videoIcon} alt="" />
                </div>
                <div className="text-start grid gap-y-3">
                    <p className="text-7xl text-white font-black">Type & Get Hired</p>
                    <p className="text-7xl text-white font-black opacity-[0.8]">in films & TV <br /> Shows.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;