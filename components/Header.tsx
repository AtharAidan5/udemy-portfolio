'use client'
import Image from 'next/image';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTerminalFill, BsTerminalFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import data from '../data/header'
import Headerinfo from './HeaderInfo';

const Header = () => {
    const { image, name, jobTitle, address, experience, education } = data;
    return (
        <header className='flex flex-wrap md:flex-row flex-col items-center gap-x-8 gap-y-9 pb-7'>
            <div className='w-[200px] h-[200px] md:w-[150px] md:h-[150px] relative'>
                <Image src={image} fill alt="profile image" className="w-full h-full object-cover hover:scale-125 transition-all cursor-pointer" />
            </div>
            <div className='flex-1'>
                <h1 className='text-4xl md:text-5xl font-bold sm:pt-10'>
                    {name}
                </h1>
                <h3 className='mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize'>
                    {jobTitle}
                </h3>
                <div className='flex flex-wrap items-center gap-y-1 gap-x-4 mt-4'>
                    <Headerinfo
                        Icon={
                            <FaMapMarkerAlt size={16} />
                        }
                        Title={address}
                    />
                    <Headerinfo
                        Icon={
                            <BsTerminalFill size={16} />
                        }
                        Title={experience}
                    />
                    <Headerinfo
                        Icon={
                            <IoSchool size={20} />
                        }
                        Title={education}
                    />
                </div>
            </div>
        </header>
    )
}
export default Header;