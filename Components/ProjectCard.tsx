import Image from 'next/image';
import { useEnglish } from '../context/englishContext';
import Modal from './InfoModal';

interface Project {
    img: string;
    name: string;
    description?: string;
    english?: string;
    technologies: any[];
    github?: string;
    link?: string;
    linkedin?: string;
}

interface Props {
    project: Project;
    show?: boolean;
}

export default function Card({ project, show }: Props) {
    const { english } = useEnglish();

    return (
        <div className='w-[90%] sm:w-[60%] group '>

            <div className={`relative flex flex-col items-center w-full h-max shadow-xl bg-zinc-50 rounded-lg overflow-hidden
                opacity-0 ${show ? 'opacity-100' : ''}
                ${project.description ? 'group-hover:[transform:rotateY(180deg)]' : ''}
                transition duration:1000`}>
                <h1 className='text-lg font-medium my-2 p-2 border-sky-800 border-r-2 border-b rounded-t-md rounded-l-md'>
                    {project.name?.toUpperCase()}
                </h1>
                <Image src={`/images/${project.img}.png`} alt='not found' height={400} width={1000}
                    className='rounded-b-lg' />
                <div className={`absolute inset-0 bg-black/90 invisible
                    ${project.description ? 'group-hover:visible' : ''}
                    transition duration:700
                    [transform:rotateY(180deg)] text-gray-100
                    flex flex-col items-center justify-center`}>
                    <h2 className='text-xl'>
                        {
                            english
                                ? 'Description'
                                : 'Descripción'
                        }:
                    </h2>
                    <p className='text-center px-2'>
                        {
                            english
                            ? project.english
                            : project.description
                        }
                    </p>
                </div>

            </div>
            <Modal project={project} />

        </div>
    )
}
