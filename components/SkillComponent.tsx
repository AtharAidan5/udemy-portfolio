import classNames from "classnames";
import Image, { StaticImageData } from "next/image";

type Skill = {
    image: string | StaticImageData;
    name?: string;
};

interface SkillComponentProps {
    skill: Skill;
}

const SkillComponent: React.FC<SkillComponentProps> = ({ skill }) => {
    return (
        <div className="flex items-center space-x-2 px-3 py-2 bg-[#c0c0c0] rounded-2xl hover:scale-125 transition-all">
            <div className={classNames("relative w-[25px] h-[25px]")}>
                <Image src={skill.image} alt={skill.name || "Skill image"} fill className="w-full h-full object-cover" />
            </div>
            <span className="capitalize text-sm md:text-base text-black font-bold">{skill.name}</span>
        </div>
    )
}
export default SkillComponent;