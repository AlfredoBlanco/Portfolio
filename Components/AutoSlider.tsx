import { IconType } from "react-icons/lib";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Cards from "./Card";

interface TechCard {
    Icon: IconType,
    name: string
}

interface Props {
    technologies: TechCard[];
    show ?: boolean;
}

export default function AutoSlider({ technologies, show }: Props) {

    return (
        <div className={`relative p-4 pb-0 mt-2 h-[15vh] w-[90%] overflow-hidden ${show ? '' : 'md:hidden'}`}>
            <div className='absolute left-0 top-0 flex items-center w-[200%] animate-infScroll'>
                {
                    [0, 1].map((e) => (
                        <div key={e} className="flex w-[50%] h-[15vh] justify-around items-center ">
                            {
                                technologies.map((e: TechCard) => (
                                    <Cards key={e.name} Icon={e.Icon} name={e.name} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>


        </div>
    )
}