import { useState } from 'react';
import SwitchButton from './SwitchButton';
import NavButton from './NavButton';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { IconType } from 'react-icons/lib';

interface Button{
    Icon?: IconType;
    url: string;
    arg: string;
    eng: string;
}

export default function Menu(){
    const [show, setShow] = useState<boolean>(false);
    const [links] = useState<Button[]>([
        { Icon: AiOutlineHome, url: 'About', arg: 'Sobre mi', eng: 'About'},
        { Icon: RiCodeSSlashLine, url: 'Tech', arg: 'Skills', eng: 'Skills'},
        { Icon: MdWorkOutline, url: 'Projects', arg: 'Proyectos', eng: 'Projects'},
        { Icon: BsFillPersonFill, url: 'Contact', arg: 'Contacto', eng: 'Contact'},
    ])

    const handleClick = () => {
        setShow(!show);
    } 

    return (
        <>
            <div className={`md:hidden fixed top-0 right-[100%] flex flex-col items-center
                w-screen h-screen pt-8 text-gray-100 bg-gray-900 bg-opacity-80
                transition duration-700 ease-out
                z-[100] gap-8 ${show ? 'translate-x-full' : ''}`}>
                <SwitchButton />
                <div className='flex flex-col items-center min-w-[30%] overflow-hidden'
                    onClick={handleClick} >
                    {
                        links.map((e: Button) => (
                            <NavButton key={e.url} Icon={e.Icon} url={e.url} arg={e.arg} eng={e.eng} />
                        ))
                    }
                </div>
            </div>
            <button className={`absolute top-2 left-2 md:hidden text-gray-100 p-1 bg-gray-800 rounded-lg z-[100]
                transition duration-400 group`}
                onClick={handleClick}>
                {
                    show
                    ? <AiOutlineClose size={30} className='group-active:-rotate-[360deg] transition duration-600' />
                    : <FiMenu size={30} className='group-active:rotate-[360deg] transition duration-600' />
                }
            </button>

        </>
    )
}