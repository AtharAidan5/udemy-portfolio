import { link } from 'fs';
import Heading from './Heading';
import data from '@/data/contacts';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionWrapper from './SectionWrapper';

const Contacts = () => {
    return (
        <SectionWrapper>
            <Heading>Contacts</Heading>
            <div className='flex flex-wrap items-center gap-5'>
                {data.map(contact => (
                    <a 
                        href={contact.link} 
                        key={contact.id} 
                        target="_blank" 
                        rel="noopener noreferrer" className='px-3 py-2 text-black font-bold bg-[#c0c0c0] rounded-2xl hover:scale-125 transition-all'>
                        {contact.name === "github" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <FaGithub size={20} />
                                {contact.name}
                            </div>
                        )}
                        {contact.name === "linkedin" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <FaLinkedin size={20} />
                                {contact.name}
                            </div>
                        )}
                        {contact.name === "youtube" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <FaYoutube size={20} />
                                {contact.name}
                            </div>
                        )}
                        {contact.name === "instagram" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <FaInstagram size={20} />
                                {contact.name}
                            </div>
                        )}
                        {contact.name === "facebook" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <FaFacebook size={20} />
                                {contact.name}
                            </div>
                        )}
                        {contact.name === "email" && (
                            <div className='flex items-center text-sm md:text-base gap-2 capitalize'>
                                <MdEmail size={20} />
                                {contact.name}
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </SectionWrapper>
    );
};
export default Contacts;