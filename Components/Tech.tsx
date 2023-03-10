import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
    SiSolidity, SiNextdotjs, SiRedux, SiExpress, SiPostgresql,
    SiSequelize, SiTypescript, SiTailwindcss, SiMongodb, SiPython
} from 'react-icons/si';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Cards from './Cards';
import AutoSlider from './AutoSlider';
import VertSlider from './VertSlider';
import { useEnglish } from '../context/englishContext';
import { useState } from 'react';
import { IconType } from 'react-icons/lib';
import ManualSlider from './ManualSlider';

interface TechCard {
    Icon: IconType,
    name: string
}

export default function Tech() {
    const { english } = useEnglish();
    const [techs1] = useState<TechCard[]>([
        { Icon: FaNodeJs, name: 'Node.js' },
        { Icon: FaReact, name: 'React.js' },
        { Icon: SiNextdotjs, name: 'Next.js' },
        { Icon: SiRedux, name: 'Redux' },
        { Icon: SiExpress, name: 'Express' },

    ])
    const [techs2] = useState<TechCard[]>([
        { Icon: SiSolidity, name: 'Solidity' },
        { Icon: SiTailwindcss, name: 'Tailwind' },
        { Icon: SiPostgresql, name: 'PostgreSQL' },
        { Icon: SiMongodb, name: 'MongoDB' },
        { Icon: SiSequelize, name: 'Sequelize' },
        { Icon: SiTypescript, name: 'Typescript' },

    ])

    const [learningTechs] = useState<TechCard[]>([
        { Icon: FaReact, name: 'Native' },
        { Icon: SiPython, name: 'Python' },
    ])

    const sliderClass = 'w-full h-max overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth transition duration-1000 scrollbar-hide';
    

    return (
        <div className='flex flex-col items-center justify-around h-screen w-screen md:w-[90%] 
            bg-zinc-900 text-zinc-50 border-t-2 border-sky-400' id='Tech'>
            <h1 className='text-5xl p-4 my-4 border-y-2 border-sky-400 rounded-lg' >
                {
                    english ? 'Technologies' : 'Tecnologías'
                }
            </h1>
            <div className='w-[100%] h-[70%] flex flex-col md:flex-row items-center justify-around'>
                <div className='w-[100%] h-full hidden xsm:flex flex-col md:flex-row justify-around items-center'>

                    <VertSlider technologies={techs1} />
                    <AutoSlider technologies={techs1} />
                    <VertSlider technologies={techs2} />
                    <AutoSlider technologies={techs2} />
                </div>
                <div className='flex items-center justify-center h-[100%] w-full xsm:hidden px-2 transition duration-700'>
                    <div className={`${sliderClass} w-max`}>
                        {
                            [...techs1, ...techs2].map((e: TechCard) => (
                                <Cards key={e.name} Icon={e.Icon} name={e.name} />
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start w-[50%] h-full '>

                    <h2 className='text-xl text-center ' >
                        {
                            english
                                ? "Now I find myself learning:"
                                : "Por el momento estoy aprendiendo: "
                        }

                    </h2>
                    <VertSlider technologies={learningTechs} />
                    <AutoSlider technologies={learningTechs} />

                </div>
            </div>

            {/* <ManualSlider technologies={[...techs1, ...techs2]} id={1} />

            <AutoSlider technologies={techs1} />
		    <AutoSlider technologies={techs2} />
            <VertSlider technologies={techs1} />
		    

            <div className='flex flex-col items-center w-full mt-6'>

                <h2 className='text-xl text-center py-4' >
                    {
                        english
                        ? "As I said before, I'm always learning new things, now I find myself learning:"
                        : 'Como dije anteriormente, me gusta aprender cosas nuevas, por el momento estoy aprendiendo: '
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
            </div>*/}


        </div>
    )
}