import Image from 'next/image';
import Modal from './InfoModal';
interface Project{
    img ?: string;
    name?: string;
    technologies : any[];
    github ?: string;
    link?: string;
    linkedin?: string;
}

interface Props{
    project : Project;
    show ?: boolean;
}

export default function Card({ project, show} : Props){
    const iconClass = 'mt-6 sm:mt-2 transition duration-700 hover:rotate-[360deg] hover:scale-125';
    return (
        <div className={`relative flex flex-col items-center w-[90%] sm:w-[60%] h-max shadow-xl bg-zinc-50 rounded-lg overflow-hidden
            transition ease-out opacity-0 ${show ? 'opacity-100' : ''} `}>
            <h1 className='text-lg font-medium my-2 p-2 border-sky-800 border-r-2 border-b rounded-t-md rounded-l-md'>
                {project.name?.toUpperCase()}
            </h1>
            
            <Image src={`/images/${project.img}.png`} alt='not found' height={400} width={1000} 
                className='rounded-b-lg' />
            
            <Modal project={project} />
            
        </div>
    )
}
/* <div className='flex flex-col items-center w-full'>
                <div className='flex flex-col lg:flex-row items-center justify-evenly w-full mt-2'>
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
            </div> */
{/* <div className='flex flex-col items-center border-2 border-sky-300'>
                <span><b>About {name}</b></span> <br/>
                <div>
                    <span>Technologies used: </span><br/>
                    <ul className='flex'>
                    {
                        tech.map(e =>(
                            <li key={e} className=''>
                                {e}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className='flex'>
                    <a href={url} target='_blank' rel="noopener noreferrer">

                        <button className=''>App link</button>
                    </a>
                    <a href={linkedin} target='_blank' rel="noopener noreferrer">
                        <button className=''> <SiLinkedin /> Post</button>
                    </a>
                </div>
            </div> */}