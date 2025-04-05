import React from 'react';

const Logo80 = () => ( 
    <div className="flex items-center">
        <svg
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20"
        preserveAspectRatio="none"
    >
        <rect width={80} height={80} rx={2} fill="#202020" />
        <rect
        x="44.418"
        y="19.3467"
        width={7}
        height={48}
        rx={2}
        transform="rotate(-24 44.418 19.3467)"
        fill="#F4F4F4"
        />
        <rect
        width={7}
        height={48}
        rx={2}
        transform="matrix(0.913545 0.406737 0.406737 -0.913545 9.5 60.3496)"
        fill="#F4F4F4"
        />
        </svg>
        <p className="ml-2 text-[64px] font-onest font-medium text-neutral-0">
            llyo
        </p>
    </div>
);

export default Logo80;       