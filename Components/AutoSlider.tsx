import { IconType } from "react-icons/lib";
import Cards from "./Cards";

interface TechCard {
    Icon : IconType,
    name : string
}

interface Props{
    technologies : TechCard[];
}

export default function AutoSlider({ technologies } : Props){
    return (
        <div className='relative p-4 pb-0 mt-2 w-[90%] overflow-hidden hidden xl:block '>
            <div className='absolute left-0 top-0 flex items-center h-max w-[200%] animate-infScroll'>
                {
                    [0, 1].map((e) => (
                        <div key={e} className="flex w-[50%] h-max justify-around items-center">
                            {
                                technologies.map((e : TechCard) => (
                                    <Cards key={e.name} Icon={e.Icon} name={e.name} />
                                    ))
                                }
                        </div>
                    ))
                }
            </div>
            <div className='invisible'>
                <Cards key={'heigh'} Icon={technologies[0]?.Icon} name={'height-helper'} />
            </div>
        </div>
)
}