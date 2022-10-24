import { IconType } from "react-icons/lib";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Cards from "./Cards";

interface TechCard {
    Icon : IconType,
    name : string
}

interface Props{
    technologies : TechCard[];
    id : number;
}

export default function ManualSlider({ technologies, id } : Props){
    const arrowClass = 'hidden xsm:block cursor-pointer';

    const slideLeft = () => {
        const slider = document.getElementById(`slide${id}`);
        slider ? slider.scrollLeft -= 200 : '';
    }

    const slideRight = () => {
        const slider = document.getElementById(`slide${id}`);
        if(slider){
            slider.scrollLeft += 200;
        }
    }

    return(
        <div className='relative flex items-center w-full block xl:hidden px-2 transition duration-700'>
            <MdChevronLeft size={40} onClick={slideLeft} className={arrowClass} />
            <div id={`slide${id}`} className='w-full h-max overflow-x-scroll overflow-y-hidden scroll
                whitespace-nowrap scroll-smooth transition duration-1000 scrollbar-hide'>
                {
                    technologies.map((e : TechCard) => (
                        <Cards key={e.name} Icon={e.Icon} name={e.name} />
                        ))
                    }
            </div>
            <MdChevronRight size={40} onClick={slideRight} className={arrowClass} />
        </div>
    )
}