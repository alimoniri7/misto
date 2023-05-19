import ClockFilled from '@/public/icons/ClockFilled';
import FacebookFilled from '@/public/icons/FacebookFilled';
import InstagramFilled from '@/public/icons/InstagramFilled';
import LocationFilled from '@/public/icons/LocationFilled';
import PhoneFilled from '@/public/icons/PhoneFilled';
import Pinterest from '@/public/icons/Pinterest';
import TwitterFilled from '@/public/icons/TwitterFilled';
import Link from 'next/link';
import React from 'react';
import tailwindcolors from 'tailwindcss/colors';

const Topbar = () => {
    return (
        <div className='bg-black-gray w-full hidden sm:flex justify-center items-start' >
            <div className='container mx-auto p-2 flex items-center justify-between' >

                <div className='flex gap-3 items-center' >
                    <div className='flex items-center gap-1'>
                        <PhoneFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p dir='ltr' className='text-white text-left text-sm' >
                            +98 912 022 9389
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <LocationFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p className='text-white text-xs' >
                        ایران، تهران، دریاچه چیتگر
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <ClockFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p className='text-white text-xs' >
                        تمام هفته 24/7
                        </p>
                    </div>

                </div>
                <div className='flex items-center gap-2' >
                    <Link href='#' className='leading-none'>
                        <FacebookFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </Link>
                    <Link href='#' className='leading-none'>
                        <TwitterFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </Link>
                    <Link href='#' className='leading-none'>
                        <Pinterest width='16' height='16' fill={tailwindcolors.white}/>
                    </Link>
                    <Link href='#' className='leading-none'>
                        <InstagramFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </Link>
                </div >
            </div>
        </div>
    );
};

export default Topbar;