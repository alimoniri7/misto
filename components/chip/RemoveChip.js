import useHover from '@/hooks/useHover';
import theme from '@/mui/theme';
import Minus from '@/public/icons/Minus';
import X from '@/public/icons/X';
import { Box, Typography } from '@mui/material';
import React from 'react';

const RemoveChip = ({
    onClick,
    children
}) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <Box ref={hoverRef} display='flex' alignItems='center' gap={.1} sx={{cursor: 'pointer'}} onClick={onClick}>
            <Box>
                <Typography fontSize='14px' color={isHovered ? 'blackGray.main' : 'gray.main'} >
                    {children}
                </Typography>
            </Box>
                {
                    isHovered ? <Minus width='14' height='14' fill={theme.palette.blackGray.main}/> : <X width='14' height='14' fill={theme.palette.gray.main}/>
                }
        </Box>
    );
};

export default RemoveChip;