import { useState } from "react"
import { AiOutlineGlobal } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import AutoSlider from "./AutoSlider";
import ManualSlider from "./ManualSlider";
import { useEnglish } from '../context/englishContext';


interface Project{
    img : string;
    name : string;
    technologies : any[];
    github ?: string;
    link?: string;
    linkedin?: string;
}

interface Props{
    project : Project;
}

export default function InfoModal({ project : { name, linkedin, github, link, technologies } } : Props){
    const { english } = useEnglish();
    const [show, setShow] = useState<boolean>(false);
    const iconClass = 'mt-6 sm:mt-2 transition duration-700 hover:text-transparent hover:rotate-[360deg] hover:scale-125';

    return show
        ? (
            <div className="fixed top-0 left-0 z-[100] flex items-center justify-center h-screen w-screen
                bg-stone-900 bg-opacity-[97%] text-zinc-50 overflow-hidden">
                <button className="absolute top-3 left-3 " onClick={() => setShow(false)}>
                    <CgCloseR size={40} />
                </button>
                <div className="flex flex-col items-center justify-between min-w-[60%] min-h-[60%]
                    border-2 py-2 mx-2 rounded-lg bg-stone-900 ">
                    <h1 className="text-xl text-center font-semibold my-2 underline 
                        underline-offset-4 decoration-sky-300 decoration-double">
                        {
                            english
                            ? 'Project '
                            : 'Proyecto '
                        }
                        { name }
                    </h1>
                    <div className="relative flex flex-col items-center w-full overflow-hidden">
                        <h2 className="self-start text-center ml-2">
                            {
                                english
                                ? 'Technologies used :'
                                : 'Tecnologías implementadas :'
                            }
                            
                        </h2>
                        <AutoSlider technologies={technologies.slice(0,3)} />
                        <AutoSlider technologies={technologies.slice(3)} />
                        <ManualSlider technologies={technologies} id={2} />
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-lg text-center" >
                            {
                                english
                                ? 'Links of interest :'
                                : 'Links de interés :'
                            }
                        </h2>
                        <div className="flex items-center justify-evenly w-full pb-4">
                        {
                            github
                            ? (
                                <a href={github} target='_blank' rel="noopener noreferrer" >
                                    <SiGithub size={30} className={iconClass} />
                                </a>
                            ) : ''
                        }
                        {
                            link
                            ? (
                                <a href={link} target='_blank' rel="noopener noreferrer">
                                    <AiOutlineGlobal size={30} className={iconClass} />
                                </a>
                            ) : ''
                        }
                        {
                            linkedin
                            ? (
                                <a href={linkedin} target='_blank' rel="noopener noreferrer">
                                    <SiLinkedin size={30} className={iconClass} />
                                </a>
                            ) : ''
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
        : (
            <button className='absolute bottom-3 left-3 border rounded-full bg-zinc-50 
                bg-opacity-50 p-2 font-semibold transition duration-700 hover:bg-opacity-80'
                onClick={() => setShow(true)}>
                {
                    english
                    ? 'More info...'
                    : 'Detalles...'
                }
            </button>
        )
    
}