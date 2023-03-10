import { IconType } from 'react-icons';

interface Props{
    Icon: IconType;
    name: string;
}


export default function Card({Icon, name } : Props){

    return (
        <div className='relative w-max h-max flex-none inline-block hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 m-2
                rounded-md border border-cyan-700 hover:text-cyan-600'>

                <Icon size={60} />
                <div className='flex items-center justify-center h-full w-full overflow-hidden pt-2'>
                    <p className='font-medium'>{name}</p>

                </div>
                
            </div>
        </div>
    )
}