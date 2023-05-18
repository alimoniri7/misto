'use client'
import React, {useState} from 'react';

const BubbleEffect = () => {
  const [clickEffect, setClickEffect] = useState(false)

    return (
        <span className={`${clickEffect && "animate-bubble" } absolute bg-white rounded-full `} onAnimationEnd={()=>setClickEffect(false)}></span>

    );

};

export default BubbleEffect;