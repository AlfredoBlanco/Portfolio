import Image from 'next/image';
import Modal from './InfoModal';

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
    show ?: boolean;
}

export default function Card({ project, show} : Props){
    
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
