import { Box, Typography } from '@mui/material';
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
        <Box display='flex' alignItems='center' justifyContent='center' width='100%'>
            <Box display='flex' alignItems='center' justifyContent='space-between' width='95%' maxWidth='1280px'>
                <Box>
                    <Typography fontSize='36px' fontWeight='900' sx={{fontFamily: 'playfair !important', fontWeight: '900 !important'}}>MiSto</Typography>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
};

export default Navbar;