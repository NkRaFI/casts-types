import React from 'react';
import './Home.css';
import HeroBanner from '../../components/heroBanner/HeroBanner';
import iphone1Img from '../../assets/iphone1.png';
import iphone2Img from '../../assets/iphone2.png';
import energyIcon from '../../assets/energy-icon.png'
import blueStarIcon from '../../assets/blue-star-icon.png'
import movieStripIcon from '../../assets/movie-strip-icon.png'
import greenStarIcon from '../../assets/green-star-icon.png'
import tvImg from '../../assets/tv.png'
import bookIcon from '../../assets/book-icon.png'
import toughChickImg from '../../assets/tough-chick.png'
import oldTeacher from '../../assets/old-teacher.png'
import wiseGuy from '../../assets/wise-guy.png'
import revengeGuy from '../../assets/revenge-guy.png'
import arrowRight from '../../assets/arrow-right.png'
import arrowLeft from '../../assets/arrow-left.png'
import maskIcon from '../../assets/mask-icon.png'
import blazeIcon from '../../assets/blaze-icon.png'
import movieBoard from '../../assets/movie-board.png'
import castsTypes from '../../assets/casts-types-logo2.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'
import appleIcon from '../../assets/apple-icon.png'
import slide2RoundedImg from '../../assets/slide2-rounded-img.png'
import ratingIcon1 from '../../assets/rating-icon-1.png'
import ratingIcon2 from '../../assets/rating-icon-2.png'
import greenLightImg from '../../assets/green-light.png'
import orangeLightImg from '../../assets/orange-light.png'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const Home = () => {
    
    return (
        <>
            <HeroBanner />
            
             {/* character play section */}
            <section className="custom-container mt-24">
                <div className={`character-plays grid grid-cols-12 rounded-lg overflow-hidden h-[621px]`}>
                    <div className="col-span-7 text-xl grid place-content-center">
                        <div className='grid gap-8'>
                            <img src={energyIcon} alt="" />
                            <p className='text-5xl text-start font-bold'><span className='text-white'>Type others’ <br /> headshots</span> <span className='text-zinc-500'>, earn points <br /> and use them to</span> <span className="text-amber-400"><br /> connect with Directors <br /> and Producers.</span></p>
                            <button className='flex gap-5 items-center'>
                                <span className="text-blue-600 text-lg font-semibold">JOIN WAITLIST</span>
                                <img src={blueStarIcon} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-5 grid grid-cols-12 gap-x-5 flex">
                        <div className="col-span-6">
                            <img className='w-full' src={iphone1Img} alt="" />
                        </div>
                        <div className='col-span-6 flex items-end'>
                            <img className='w-full' src={iphone2Img} alt="" />
                        </div>
                    </div>                     
                </div>
            </section>

            {/* cast type section */}
            <section className="custom-container mt-8">
                <div className="bg-theme-secondary rounded-lg overflow-hidden h-[700px]">
                    <img className='w-[500px]' src={movieStripIcon} alt="" />
                    <div className='-translate-y-[250px] grid gap-8 justify-center'>
                        <div>
                            <div className="flex justify-center">
                                <img src={greenStarIcon} alt="" />
                            </div>
                            <p className='text-5xl font-bold'><span className='text-white'>CastTyped to</span> <br /> <span className='text-green-500'>Break in</span></p>
                        </div>
                        <p className='text-white'>Know your Type, make it easy for the industry <br /> to get you working in films right away!</p>
                        <button className='flex gap-5 items-center justify-center'>
                            <span className="text-blue-600 text-lg font-semibold">JOIN WAITLIST</span>
                            <img src={blueStarIcon} alt="" />
                        </button>
                        <div>
                            <img className='w-full' src={tvImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* stars section */}
            <section className="custom-container mt-24">
                <div className="grid gap-10">
                    <img className='w-[41px]' src={bookIcon} alt="" />
                    <div className='flex justify-between items-center'>
                        <p className='text-5xl font-bold text-start'>
                            <span className='text-zinc-500'>Don’t believe us?</span><br />
                            <span className="text-white">Look at these stars</span><br />
                            <span className="text-blue-500">sustaining their careers <br /> through their types!</span>
                        </p>
                        <button className='flex gap-5 items-center justify-center'>
                            <span className="text-blue-600 text-lg font-semibold">JOIN WAITLIST</span>
                            <img src={blueStarIcon} alt="" />
                        </button>
                    </div>

                    <Splide
                        hasTrack={ false } aria-label="..."
                        options={{
                            type: 'slide',
                            perPage: 4,
                            perMove: 4,
                            gap: '1rem',
                            padding: { left: '0', right: '8%' },
                            focus    : 'center',
                        }}
                    >
                        <SplideTrack>  
                            <SplideSlide className='rounded-3xl overflow-hidden'>
                                <img src={toughChickImg} className='w-full h-full' alt=""/>
                                <span className="absolute bottom-3 left-3 px-3 py-2 bg-black/[0.4] backdrop-blur-sm text-white text-[14px] rounded-full">Tough Chick</span>
                            </SplideSlide>
                            <SplideSlide className='rounded-3xl overflow-hidden'>
                                <img src={oldTeacher} className='w-full h-full' alt=""/>
                                <span className="absolute bottom-3 left-3 px-3 py-2 bg-black/[0.4] backdrop-blur-sm text-white text-[14px] rounded-full">Old Teacher</span>
                            </SplideSlide>
                            <SplideSlide className='rounded-3xl overflow-hidden'>
                                <img src={wiseGuy} className='w-full h-full' alt=""/>
                                <span className="absolute bottom-3 left-3 px-3 py-2 bg-black/[0.4] backdrop-blur-sm text-white text-[14px] rounded-full">Wise Guy</span>
                            </SplideSlide>
                            <SplideSlide className='rounded-3xl overflow-hidden'>
                                <img src={revengeGuy} className='w-full h-full' alt=""/>
                                <span className="absolute bottom-3 left-3 px-3 py-2 bg-black/[0.4] backdrop-blur-sm text-white text-[14px] rounded-full">Revenge Guy</span>
                            </SplideSlide>
                            <SplideSlide className='rounded-3xl overflow-hidden'>
                                <img src={toughChickImg} className='w-full h-full' alt=""/>
                                <span className="absolute bottom-3 left-3 px-3 py-2 bg-black/[0.4] backdrop-blur-sm text-white text-[14px] rounded-full">HotShot</span>
                            </SplideSlide>
                        </SplideTrack>
                        <div className="splide__arrows absolute bottom-[-10%] left-[50%]">
                            <button className="splide__arrow splide__arrow--prev slid__arrow--prev2"><img src={arrowLeft} alt="" /></button>
                            <button className="splide__arrow splide__arrow--next slid__arrow--next2"><img src={arrowRight} alt="" /></button>
                        </div>
                    </Splide>
                </div>
            </section>

            {/* slide-2 section */}
            <section className="custom-container mt-48">
                <div className={`grid grid-cols-12 rounded-lg overflow-hidden`}>
                    <div className="col-span-7 bg-[#0F0F0D] grid place-content-center">
                        <div className="relative grid justify-center">
                            <Splide
                                hasTrack={ false } aria-label="..."
                                options={{
                                    type: 'loop',
                                    perPage: 1,
                                    perMove: 1,
                                    gap: '1rem',
                                    padding: { left: '10%', right: '10%' },
                                    focus    : 'center',
                                }}
                            >
                                <SplideTrack>  
                                    <SplideSlide className='rounded-3xl h-80 overflow-hidden splide__slide-2'>
                                        <img src={toughChickImg} className='w-full h-full opacity-0' alt=""/>
                                        <div className="absolute px-8 top-0 left-0 w-full h-full bg-[#1F1F1D] rounded-lg grid place-content-center">
                                            <div className='flex justify-center mb-2'>
                                                <img className='h-[40px] w-[40px] rounded-full' src={slide2RoundedImg} alt="" />
                                            </div>
                                            <p className='text-[14px] font-semibold text-white'>Meyer G.</p>
                                            <div className='flex justify-center gap-1 mt-1'>
                                                <img src={ratingIcon1} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                            </div>
                                            <p className='text-zinc-500 mt-5'>If you know me, you know I like Susie’s cakes even though I have slight problems with fast food restaurants (I consider their experience mid at most). The food was okay. Better than CRs tbh.</p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide className='rounded-3xl h-80 overflow-hidden'>
                                        <img src={toughChickImg} className='w-full h-full opacity-0' alt=""/>
                                        <div className="absolute px-8 top-0 left-0 w-full h-full bg-[#1F1F1D] rounded-lg grid place-content-center">
                                            <div className='flex justify-center mb-2'>
                                                <img className='h-[40px] w-[40px] rounded-full' src={slide2RoundedImg} alt="" />
                                            </div>
                                            <p className='text-[14px] font-semibold text-white'>Meyer G.</p>
                                            <div className='flex justify-center gap-1 mt-1'>
                                                <img src={ratingIcon1} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                            </div>
                                            <p className='text-zinc-500 mt-5'>If you know me, you know I like Susie’s cakes even though I have slight problems with fast food restaurants (I consider their experience mid at most). The food was okay. Better than CRs tbh.</p>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide className='rounded-3xl h-80 overflow-hidden'>
                                        <img src={toughChickImg} className='w-full h-full opacity-0' alt=""/>
                                        <div className="absolute px-8 top-0 left-0 w-full h-full bg-[#1F1F1D] rounded-lg grid place-content-center">
                                            <div className='flex justify-center mb-2'>
                                                <img className='h-[40px] w-[40px] rounded-full' src={slide2RoundedImg} alt="" />
                                            </div>
                                            <p className='text-[14px] font-semibold text-white'>Meyer G.</p>
                                            <div className='flex justify-center gap-1 mt-1'>
                                                <img src={ratingIcon1} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                                <img src={ratingIcon2} alt="" />
                                            </div>
                                            <p className='text-zinc-500 mt-5'>If you know me, you know I like Susie’s cakes even though I have slight problems with fast food restaurants (I consider their experience mid at most). The food was okay. Better than CRs tbh.</p>
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                                <div className="splide__arrows splide__arrows-2">
                                    <button className="splide__arrow splide__arrow--prev splide__arrow--prev2"><img src={arrowLeft} alt="" /></button>
                                    <button className="splide__arrow splide__arrow--next splide__arrow--next2"><img src={arrowRight} alt="" /></button>
                                </div>
                            </Splide>
                        </div>
                    </div>                 
                    <div className="col-span-5 bg-[#1F1F1D] py-40 grid gap-8 px-8 justify-start">
                        <p className='text-6xl font-bold text-start'><span className='text-white'>Take their <br /> word</span> <span className='text-zinc-500'>for it</span></p>
                        <button className='justify-self-start flex gap-5 items-center justify-start'>
                            <span className="text-blue-600 text-lg font-semibold">JOIN WAITLIST</span>
                            <img src={blueStarIcon} alt="" />
                        </button>
                    </div>
                </div>
            </section>
            
            {/* simple section */}
            <section className="custom-container mt-24 relative">
                <div className="grid gap-10">
                    <p className='text-7xl text-start font-bold'>
                        <span className='text-white'>It’s pretty</span> <br /> 
                        <span className='text-zinc-500'>simple</span>
                    </p>
                    <div className="grid grid-cols-12 gap-10 2xl:gap-14">
                        <div className="col-span-4 relative bg-[url('/src/assets/simple-circle1.png')] bg-no-repeat bg-contain 2xl:bg-cover p-16">
                            {/* <img className='w-full' src={simpleCircle1} alt="" /> */}
                            <div className='grid gap-3'>
                                <img src={maskIcon} alt="" />
                                <p className='text-2xl text-white font-bold text-start'>Sign Up</p>
                                <p className='text-lg text-start text-white font-light'>Register to join CastTypes as a performer and get typed.</p>
                            </div>
                        </div>
                        <div className="col-span-4 relative bg-[url('/src/assets/simple-circle2.png')] bg-no-repeat bg-contain 2xl:bg-cover p-16">
                            {/* <img className='w-full' src={simpleCircle1} alt="" /> */}
                            <div className='grid gap-3'>
                                <img src={blazeIcon} alt="" />
                                <p className='text-2xl text-white font-bold text-start'>Type & Earn Points</p>
                                <p className='text-lg text-start text-white font-light'>Type others’ headshots, earn points and earn points.</p>
                            </div>
                        </div>
                        <div className="col-span-4 relative bg-[url('/src/assets/simple-circle3.png')] bg-no-repeat bg-contain 2xl:bg-cover p-16">
                            {/* <img className='w-full' src={simpleCircle1} alt="" /> */}
                            <div className='grid gap-3'>
                                <img src={movieBoard} alt="" />
                                <p className='text-2xl text-white font-bold text-start'>Audition</p>
                                <p className='text-lg text-start text-white font-light'>Connect with Directors and Producers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex gap-5 items-center'>
                            <span className="text-blue-600 text-lg font-semibold">JOIN WAITLIST</span>
                            <img src={blueStarIcon} alt="" />
                        </button>
                    </div>
                </div>

                <img className='absolute -top-[46%] right-0' src={greenLightImg} alt="" />
            </section>

            {/* footer section */}
            <section className='custom-container mt-72 mb-16 relative'>
                <div className="grid justify-center gap-12">
                    <div className='flex justify-center'><img src={castsTypes} alt="" /></div>
                    <p className="text-[17px] text-white text-zinc-500">
                        We help you to build your career in digital firms and world wide Organizations.
                    </p>
                    <div className='grid gap-8'>
                        <div className='flex justify-center items-center divide-x leading-5'>
                            <div className='text-start flex gap-8 items-center text-gray-200 h-full mr-8'>
                                <p className='text-base font-light'>Performers</p>
                                <p className='text-base font-light'>Film Makers</p>
                                <p className='text-base font-light'>Organizations</p>
                            </div>
                            <div className="flex gap-8 items-center text-gray-200 h-full pl-8">
                                <p className='text-base font-light'>About</p>
                                <p className='text-base font-light'>Sponsors</p>
                            </div>
                        </div>
                        <div className="flex gap-8 justify-center items-center">
                            <img src={facebookIcon} alt="" />
                            <img src={twitterIcon} alt="" />
                            <img src={instagramIcon} alt="" />
                            <img src={appleIcon} alt="" />
                        </div>
                    </div>
                    <p className="text-[17px] text-white text-zinc-500"><span className='text-xl'>&#169;</span> <span>All Right Reserved by</span> <span className='font-semibold'>CastTypes</span></p>
                </div>

                <img className='absolute left-0 z-[-1] -top-[80%]' src={orangeLightImg} alt="" />
            </section>
        </>
    );
};

export default Home;