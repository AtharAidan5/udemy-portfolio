import React from 'react';

interface HeaderInfoProps {
    Icon: React.ReactNode;
    Title: string;
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({ Icon, Title }) => {
    return (
        <div className='flex items-center space-x-2'>
            {Icon}
            <span className='capitalize text-sm md:text-base font-semibold'>
                {Title}
            </span>
        </div>
    )
}
export default HeaderInfo;