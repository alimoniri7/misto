'use client'
import React from 'react';

// hooks
import useHover from '@/hooks/useHover';

// icons
import Minus from '@/public/icons/Minus';
import X from '@/public/icons/X';

// tailwind
import tailwindcolors from 'tailwindcss/colors';


const RemoveChip = ({
    onClick,
    children
}) =>

{

    const [hoverRef, isHovered] = useHover()
    const textColor = ()=> {
        if(isHovered){
            return 'text-black-gray'
        }else{
            return 'text-gray'
        }
    }
    return (
        <div className='flex items-center gap-1 cursor-pointer ' ref={hoverRef} onClick={onClick}>
            <div>
                <p className={`${textColor()} text-sm`}>
                    {children}
                </p>
            </div>
                {
                    isHovered ? <Minus width='14' height='14' fill={tailwindcolors.gray[900]}/> : <X width='14' height='14' fill={tailwindcolors.gray[400]}/>
                }
        </div>
    );
};

export default RemoveChip;