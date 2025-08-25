import { IoIosCloseCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import SkillComponent from "./SkillComponent";

type Skill = {
    id: string | number;
    name: string;
    image: string;
    // Add other properties as needed
};

type ModelProps = {
    state: boolean;
    details?: any;
    toggleModel: () => void;
};

const Model = ({ state, details, toggleModel }: ModelProps) => {
    return state ? (
        <div className="fixed inset-0 w-full h-screen p-4 backdrop-blur z-[9999999] flex items-center justify-center">
            <IoIosCloseCircle onClick={toggleModel} className="cursor-pointer text-[25px] absolute top-6 right-6" />
            <div className="bg-[#808080] max-w-screen-xl w-full p-6 rounded-lg border max-h-[80vh] overflow-x-auto">
                <div className="flex flex-wrap lg:space-x-6">
                    <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
                        <div className="pt-[56.25%]">
                            <Image src={details.image} alt={details.alt || "Image"} fill className="w-full h-full absolute inset-0" />
                        </div>
                    </div>
                    <div className="flex-1 mt-5 lg:mt-0">
                        <h2 className="text-xl md:text-2xl font-bold">
                            {details.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                            {details.skills.map((skill: Skill) => (
                                <SkillComponent skill={skill} key={skill.id} />
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-3">
                            <a href={details.source_code}
                                target="_blank"
                                rel="noopener noreferrer" className='px-3 py-2 text-black font-bold bg-[#c0c0c0] rounded-2xl hover:scale-125 transition-all'>
                                <FaGithub size={20} />
                                <span className="text-sm md:text-base capitalize font-bold">
                                    source code
                                </span>
                            </a>
                            <a href={details.demo}
                                target="_blank"
                                rel="noopener noreferrer" className='px-3 py-2 text-black font-bold bg-[#c0c0c0] rounded-2xl hover:scale-125 transition-all'>
                                <TbWorld size={20} />
                                <span className="text-sm md:text-base capitalize font-bold">
                                    demo
                                </span>
                            </a>
                        </div>
                        <p className="text-base font-medium leading-[20px] mt-6">{details.description}</p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
export default Model;