import React from 'react';

const Navbar = () => {
    const menu = [
        {
            name: 'درباره ما',
            submenu: [
                {
                    title: ''
                }
            ]
        },
        {
            name: 'مردانه',
            submenu: [
                {
                    title: 'دسته بندی',
                    links: [
                        {
                            name: "تیشرت",
                            href: '/men/tshirt'
                        },
                        {
                            name: "شلوار",
                            href: '/men/tshirt'
                        },
                        {
                            name: "کفش",
                            href: '/men/tshirt'
                        },
                        {
                            name: "کت و شلوار",
                            href: '/men/tshirt'
                        },
                        {
                            name: "پیراهن",
                            href: '/men/tshirt'
                        },
                        {
                            name: "لباس زیر",
                            href: '/men/tshirt'
                        },
                    ]
                },
                {
                    title: "برند ها",
                    links: [
                        {
                            name: 'Jeans',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'Geordano',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'Messimo',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'Cotton',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'Zara',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'JeanWest',
                            href: '/men/tshirt'
                        },
                        {
                            name: 'Polo',
                            href: '/men/tshirt'
                        },
                    ]
                },
                {
                    
                }
            ]
        }
    ]
    return (
        <div className='flex items-center justify-center w-full' >
            <div className='flex items-center justify-between container'  >
                <div>
                    <p className='text-4xl font-black font-[playfair]'>MiSto</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Navbar;