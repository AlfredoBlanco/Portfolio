import { IconType } from 'react-icons';

interface Props{
    Icon: IconType;
    name: string;
}


export default function Card({Icon, name } : Props){

    return (
        <div className='relative w-max h-max flex-none inline-block hover:scale-110 group'>
            <div className='flex flex-col items-center justify-center
                rounded-md hover:text-cyan-600'>

                <Icon size={30} />
                <div className='flex items-center justify-center h-full w-full pt-2 invisible sm:group-hover:visible'>
                    <p className='font-medium text-center'>{name}</p>

                </div>
                
            </div>
        </div>
    )
}