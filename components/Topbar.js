import theme from '@/mui/theme';
import Clock from '@/public/icons/Clock';
import ClockFilled from '@/public/icons/ClockFilled';
import FacebookFilled from '@/public/icons/FacebookFilled';
import InstagramFilled from '@/public/icons/InstagramFilled';
import Location from '@/public/icons/Location';
import LocationFilled from '@/public/icons/LocationFilled';
import PhoneFilled from '@/public/icons/PhoneFilled';
import Pinterest from '@/public/icons/Pinterest';
import TwitterFilled from '@/public/icons/TwitterFilled';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Topbar = () => {
    return (
        <Box bgcolor='blackGray.main' width='100%' display={{xs: 'none', sm: 'flex'}} justifyContent='center' alignItems='flex-start'>
            <Box maxWidth="1180px" width="95%" padding={0.5} display='flex' alignItems='center' justifyContent='space-between'>

                <Box display='flex' gap={3} alignItems='center'>
                    <Box display='flex' alignItems='center' gap={1}>
                        <PhoneFilled width='16' height='16' fill={theme.palette.white.main}/>
                        <Typography color='text.secondary' sx={{direction: 'rtl', }} textAlign='left' fontSize='14px'>
                            +98 912 022 9389
                        </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' gap={1}>
                        <LocationFilled width='16' height='16' fill={theme.palette.white.main}/>
                        <Typography color='text.secondary' fontSize='13px' >
                        ایران، تهران، دریاچه چیتگر
                        </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' gap={1}>
                        <ClockFilled width='16' height='16' fill={theme.palette.white.main}/>
                        <Typography color='text.secondary' fontSize='13px' >
                        تمام هفته 24/7
                        </Typography>
                    </Box>

                </Box>
                <Box display='flex' alignItems='center' gap={1}>
                    <Link href='#' style={{lineHeight: '0'}}>
                        <FacebookFilled width='16' height='16' fill={theme.palette.white.main}/>
                    </Link>
                    <Link href='#' style={{lineHeight: '0'}}>
                        <TwitterFilled width='16' height='16' fill={theme.palette.white.main}/>
                    </Link>
                    <Link href='#' style={{lineHeight: '0'}}>
                        <Pinterest width='16' height='16' fill={theme.palette.white.main}/>
                    </Link>
                    <Link href='#' style={{lineHeight: '0'}}>
                        <InstagramFilled width='16' height='16' fill={theme.palette.white.main}/>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Topbar;