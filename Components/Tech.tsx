import { FaNodeJs, FaReact} from 'react-icons/fa';
import { SiSolidity, SiNextdotjs, SiRedux, SiExpress, SiPostgresql, SiSequelize, SiTypescript} from 'react-icons/si';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Cards from './Cards';
import { useEnglish } from '../context/englishContext';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';

interface TechCard {
    Icon : IconType,
    name : string
}

export default function Tech(){
    const { english } = useEnglish();
    const [ techs ] = useState<TechCard[]>([
        { Icon : FaNodeJs, name : 'Node.js' },
        { Icon : FaReact, name : 'React.js' },
        { Icon : SiNextdotjs, name : 'Next.js' },
        { Icon : SiSolidity, name : 'Solidity' },
        { Icon : SiRedux, name : 'Redux' },
        { Icon : SiExpress, name : 'Express' },
        { Icon : SiPostgresql, name : 'PostgreSQL' },
        { Icon : SiSequelize, name : 'Sequelize' },
    ])
    const [ learningTechs ] = useState<TechCard[]>([
        { Icon : SiTypescript, name : 'Typescript' },
        { Icon : BsThreeDots, name : 'Coming soon' },
    ])
    const sliderClass = 'w-full h-max overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth transition duration-1000 scrollbar-hide';
    const arrowClass = 'hidden xsm:block cursor-pointer';

    const slideLeft = () => {
        const slider = document.getElementById('slide');
        slider ? slider.scrollLeft -= 200 : '';
    }

    const slideRight = () => {
        const slider = document.getElementById('slide');
        slider ? slider.scrollLeft += 200 : '';
    }

    const slideLearningLeft = () => {
        const slider = document.getElementById('learningSlide');
        slider ? slider.scrollLeft -= 400 : '';
    }

    const slideLearningRight = () => {
        const slider = document.getElementById('learningSlide');
        slider ? slider.scrollLeft += 400 : '';
    }

    return (
        <div className='flex flex-col items-center justify-around min-h-screen w-screen md:w-[90%] 
            bg-zinc-900 text-zinc-50 border-t-2 border-sky-400' id='Tech'>
            <h1 className='text-5xl p-4 mt-2 border-y-2 border-sky-400 rounded-lg' >
                {
                    english ? 'Technologies' : 'Tecnologías'
                }
            </h1>
            <div className='relative flex items-center w-full xl:w-[60%] px-2 transition duration-700'>
                <MdChevronLeft size={40} onClick={slideLeft} className={arrowClass} />
                <div id='slide' className={sliderClass}>
                    {
                        techs.map((e : TechCard) => (
                            <Cards key={e.name} Icon={e.Icon} name={e.name} />
                            ))
                        }
                </div>
                <MdChevronRight size={40} onClick={slideRight} className={arrowClass} />
            </div>
            <div className='flex flex-col items-center w-full mt-6'>

                <h2 className='text-xl text-center py-4' >
                    {
                        english
                        ? "As I said before, I'm always learning new things, now I find myself learning :"
                        : 'Como dije anteriormente, me gusta aprender cosas nuevas, por el momento estoy aprendiendo : '
                    }
                    
                </h2>
                <div className='flex items-center justify-center w-full xl:w-[60%] px-2 transition duration-700'>
                <MdChevronLeft size={40} onClick={slideLearningLeft} className={arrowClass} />
                <div id='learningSlide' className={`${sliderClass} w-max`}>
                    {
                        learningTechs.map((e : TechCard) => (
                            <Cards key={e.name} Icon={e.Icon} name={e.name} />
                            ))
                        }
                </div>
                <MdChevronRight size={40} onClick={slideLearningRight} className={arrowClass} />
            </div>
            </div>
                
            
        </div>
    )
}