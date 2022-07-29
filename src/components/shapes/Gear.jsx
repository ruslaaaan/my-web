import React, {useRef, useEffect, useState } from 'react'
import {gsap} from 'gsap'


const Gear = ({ addAnimation, x,y, index, duration }) => {
    const ref = useRef();

    useEffect(() => {  
        const animation = gsap.to(ref.current,  {
            x: `${x}rem`, 
            ease:'back', 
            duration:duration, 
            rotate:420,
        });
        addAnimation(animation, index);
        return () => animation.progress(0).kill();
    }, [addAnimation]);

    return (
        <svg
            filter="url('#inset-shadow')"
            ref={ref}
            width={66}
            height={66}
            fill="none"
        >
            <g clipPath="url(#a)" fill="#fff">
            <path d="M24.423 52.941a5.647 5.647 0 0 1-3.365-3.46l-1-2.59a2.583 2.583 0 0 0-1.703-1.582l-2.726-.738a5.728 5.728 0 0 1-3.673-3.108 5.79 5.79 0 0 1 0-4.818l1.216-2.638a2.646 2.646 0 0 0-.14-2.272l-1.327-2.42a5.708 5.708 0 0 1 3.018-8.191l2.59-1a2.583 2.583 0 0 0 1.584-1.77l.738-2.725a5.813 5.813 0 0 1 3.108-3.673 5.708 5.708 0 0 1 4.818 0l2.638 1.216a2.563 2.563 0 0 0 2.272-.14l2.42-1.327a5.708 5.708 0 0 1 4.807-.45 5.646 5.646 0 0 1 3.365 3.461l1 2.59a2.624 2.624 0 0 0 1.789 1.591l2.725.738a5.73 5.73 0 0 1 3.703 8.026l-1.246 2.538a2.646 2.646 0 0 0 .14 2.272l1.327 2.42a5.71 5.71 0 0 1-3.018 8.192l-2.59 1a2.584 2.584 0 0 0-1.584 1.769l-.738 2.725a5.811 5.811 0 0 1-3.108 3.673 5.71 5.71 0 0 1-4.818 0l-2.638-1.216a2.647 2.647 0 0 0-2.272.14l-2.42 1.327a5.708 5.708 0 0 1-4.807.45l-.085-.01ZM19.63 42.45a5.728 5.728 0 0 1 3.365 3.46l1 2.59a2.585 2.585 0 0 0 1.54 1.544 2.5 2.5 0 0 0 2.278-.16l2.422-1.327a5.708 5.708 0 0 1 5.255-.283l2.567 1.168a2.521 2.521 0 0 0 2.214.016 2.603 2.603 0 0 0 1.425-1.695l.75-2.699a5.687 5.687 0 0 1 3.626-3.814l2.589-1a2.582 2.582 0 0 0 1.544-1.54 2.5 2.5 0 0 0-.159-2.28l-1.328-2.42a5.73 5.73 0 0 1-.283-5.256l1.168-2.567a2.582 2.582 0 0 0-1.673-3.592l-2.7-.75a5.666 5.666 0 0 1-3.814-3.627l-1-2.588a2.584 2.584 0 0 0-1.714-1.432 2.5 2.5 0 0 0-2.28.16l-2.42 1.327a5.791 5.791 0 0 1-5.256.284L26.18 14.8a2.52 2.52 0 0 0-2.214-.017 2.605 2.605 0 0 0-1.424 1.695l-.75 2.699a5.688 5.688 0 0 1-3.627 3.815l-2.589 1a2.584 2.584 0 0 0-1.544 1.54 2.5 2.5 0 0 0 .159 2.278l1.328 2.422a5.73 5.73 0 0 1 .283 5.255l-1.168 2.567a2.584 2.584 0 0 0 1.673 3.592l2.7.75.624.053Z" />
            <path d="M29.401 39.434a7.813 7.813 0 1 1 5.405-14.662A7.813 7.813 0 0 1 29.4 39.434Zm4.323-11.73a4.688 4.688 0 1 0-3.242 8.798 4.688 4.688 0 0 0 3.242-8.797Z" />
            </g>
            <defs>
            <clipPath id="a">
                <path
                fill="#fff"
                transform="rotate(20.232 8.646 48.458)"
                d="M0 0h50v50H0z"
                />
            </clipPath>
            </defs>
        </svg>
    )
}

export default Gear
