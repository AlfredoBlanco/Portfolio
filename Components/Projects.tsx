import { useState } from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { SiExpress, SiNextdotjs, SiPostgresql, SiRedux, SiSequelize, SiSolidity, SiTypescript } from 'react-icons/si';
import { useEnglish } from '../context/englishContext';
import Card from './ProjectCard';

interface TechCard {
    Icon : IconType,
    name : string
}

interface Project{
    img : string;
    name : string;
    technologies : TechCard[];
    github ?: string;
    linkedin ?: string;
    link ?: string;
}

export default function Projects(){
    const { english } = useEnglish();
    const [ projects ] = useState<Project[]>([
        {
            img : 'NFTicket',
            name : 'NFTickects',
            technologies : [
                { Icon : FaNodeJs, name : 'Node.js' },
                { Icon : FaReact, name : 'React.js' },
                { Icon : SiRedux, name : 'Redux' },
                { Icon : SiNextdotjs, name : 'Next.js' },
                { Icon : SiSolidity, name : 'Solidity' },
                { Icon : SiTypescript, name : 'Typescript' },
            ],
            github : 'https://github.com/martinsione/ticketek-web3',
            linkedin : 'https://www.linkedin.com/feed/update/urn:li:activity:6925467693730934786/'
        },
        {
            img : 'piDogs',
            name : 'Dogs',
            technologies : [
                { Icon : FaNodeJs, name : 'Node.js' },
                { Icon : FaReact, name : 'React.js' },
                { Icon : SiRedux, name : 'Redux' },
                { Icon : SiExpress, name : 'Express' },
                { Icon : SiSequelize, name : 'Sequelize' },
                { Icon : SiPostgresql, name : 'PostgreSQL' },
            ],
            github : 'https://github.com/AlfredoBlanco/PI-Dogs',
            link : 'https://pi-dogs-beryl.vercel.app/',
            linkedin : 'https://www.linkedin.com/feed/update/urn:li:activity:6911770620061958144/'
        },
    ])
    const [pos, setPos] = useState<number>(0);
    const [show, setShow] = useState<boolean>(true);

    const handleShow = () => {
        setShow(false);
        setTimeout(() => {
            setShow(true);
        }, 200)
    }

    const goRight = () => {
        handleShow();
        if(pos < projects.length -1){
            setPos(pos + 1);

        } else {
            setPos(0);
        }
        
    }
    const goLeft = () => {
        handleShow();
        if(pos === 0){
            setPos(projects.length -1);

        } else {
            setPos(pos - 1);
        }
    }
    
    const handleClick = (newPos : number) => {
        handleShow();
        setPos(newPos);
    }

    return (
        <div className='flex flex-col items-center
            min-h-screen w-screen md:w-[90%] bg-slate-200 border-t-2 border-sky-700' id='Projects'>
            <div className='flex items-center justify-center 
                h-[30vh] w-full bg-zinc-800 text-zinc-50'>
                <h1 className='text-5xl font-medium text-center p-2 border-x-2 border-sky-600 rounded-md '>
                    {
                        english
                        ? 'PROJECTS'
                        : 'PROYECTOS'
                    }
                </h1>
            </div>
            <div className='flex flex-col w-[90%] h-[60vh] justify-evenly items-center mt-4'>
                <div className='flex w-full h-max justify-between items-center'>
                    <button onClick={goLeft}>{'<'}</button>
                    <Card project={projects[pos]} show={show} />
                    <button onClick={goRight}>{'>'}</button>
                </div>
                <div className='flex justify-evenly w-full'>

                    {
                        projects.map((e: Project,i: number) => (
                            <input key={i} type='button'
                                className={`h-3 w-6 border-2 border-sky-400 rounded-md
                                    ${i === pos ? 'bg-sky-400' : ''} cursor-pointer`}
                                onClick={() => handleClick(i)} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
} 
{/* <div className=''>
                <Card name='PI-Dogs'
                    img= {require('../images/piDogs.png')}
                    url= 'https://pi-dogs-beryl.vercel.app/'
                    tech={['Node', 'Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize']}
                    linkedin= 'https://www.linkedin.com/feed/update/urn:li:activity:6911770620061958144/'
                />

                <Card name='NFTickets'
                    img= {require('../images/NFTicket.png')}
                    url= 'https://nftickets.netlify.app/'
                    tech={['Solidity', 'Web3', 'Next', 'Typescript', 'Prisma', 'Chakra-UI']}
                    linkedin= 'https://www.linkedin.com/feed/update/urn:li:activity:6925467693730934786/'
                />  
    </div> */}