import Heading from './Heading'
import data from '@/data/about';
import SectionWrapper from './SectionWrapper';

const About = () => {
    return (
        <SectionWrapper>
            <Heading>About Me</Heading>
            <h3 className='text-xl md:text-2xl font-semibold capitalize'>
                {data.heading}
            </h3>
            <p className='mt-3 text-base md:text-lg font-semibold'>{data.bio}</p>
        </SectionWrapper>
    )
}
export default About;