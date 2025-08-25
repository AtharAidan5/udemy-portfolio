import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
}

const SectionWrapper = ({children}: SectionWrapperProps) => {
    return (
        <section className='border-t py-7'>
            {children}
        </section>
    )
}
export default SectionWrapper;