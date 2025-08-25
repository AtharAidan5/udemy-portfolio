import Image from 'next/image';
import Heading from './Heading';
import SectionWrapper from './SectionWrapper';
import data from '@/data/work';
import SkillComponent from './SkillComponent';

const WorkHistory = () => {
    return (
        <SectionWrapper>
            <Heading>Work History</Heading>
            {data.map(work => (
                <div className='mt-6 flex gap-x-6' key={work.id}>
                    <div className='relative w-[50px] h-[50px] rounded-full overflow-hidden border'>
                        <Image src={work.image} alt={work.role || 'Work image'} fill className='w-full h-full object-cover' />
                    </div>
                    <div className='flex-1'>
                        <h2 className='capitalize font-bold text-base xl:text-lg'>{work.role}</h2>
                        <span className='capitalize text-sm font-bold'>{work.company}</span>
                        <div className='flex items-center gap-x-1 italic capitalize text-sm mt-[2px]'>
                            <span>{work.type}</span>
                            <span>-</span>
                            <span>{work.date}</span>
                        </div>
                        {work.skills && <div className='flex gap-2 flex-wrap my-2'>
                            {work?.skills?.map(skill => (
                                <SkillComponent key={skill.id} skill={skill} />
                            ))}
                            </div>}
                        {work.options && <div className='mt-2'>
                            {work?.options?.map((option, key) => (
                                <li key={key} className='text-base font-semibold'>{option}</li>
                            ))}
                            </div>}
                    </div>
                </div>
            ))}
        </SectionWrapper>
    )
}
export default WorkHistory;