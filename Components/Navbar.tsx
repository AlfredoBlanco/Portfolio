import Link from 'next/link';
import NavButton from './NavButton';
import { useEnglish } from '../context/englishContext';
import { useState } from 'react';

interface Button{
    url: string;
    arg: string;
    eng: string;
}

export default function NavBar(){
    const { english, setEnglish } = useEnglish();
    const [links] = useState<Button[]>([
        { url: 'About', arg: 'Sobre mi', eng: 'About'},
        { url: 'Tech', arg: 'Skills', eng: 'Skills'},
        { url: 'Projects', arg: 'Proyectos', eng: 'Projects'},
        { url: 'Contact', arg: 'Contacto', eng: 'Contact'},
    ])

    const handleClick = () => {
        setEnglish ? setEnglish(!english) : '';

    }

    return (
        <div className='hidden fixed top-0 left-0 md:flex flex-col items-center justify-around
            h-screen w-[10%] bg-zinc-800 border-r-2 border-sky-400 text-gray-100'>

            <button className='relative flex items-center w-14 h-6 my-4 rounded-full
                transition duration-400 border-2'
                onClick={handleClick}>
                <div className={`w-7 h-7 bg-white rounded-full transition duration-400
                    ${english ? 'translate-x-full bg-[url("/images/Ingles.png")]' : 'bg-[url("/images/Argentina.png")]'}
                    bg-cover bg-no-repeat bg-center`} />
            </button>
            <div className='flex flex-col items-center justify-around w-full h-full'>
                {
                    links.map((e: Button) => (
                        <NavButton key={e.url} url={e.url} arg={e.arg} eng={e.eng} />
                    ))
                }
            </div>

        </div>
    )
}