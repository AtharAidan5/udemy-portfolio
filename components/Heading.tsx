import { ReactNode } from 'react';

type HeadingProps = {
    children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
    return <h3 className='capitalize text-base md:text-lg font-bold mb-3'>{children}</h3>;
};
export default Heading;