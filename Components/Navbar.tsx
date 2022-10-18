import NavButton from './NavButton';
import SwitchButton from './SwitchButton';
import { useState } from 'react';

interface Button{
    url: string;
    arg: string;
    eng: string;
}

export default function NavBar(){
    const [links] = useState<Button[]>([
        { url: 'About', arg: 'Sobre mi', eng: 'About'},
        { url: 'Tech', arg: 'Skills', eng: 'Skills'},
        { url: 'Projects', arg: 'Proyectos', eng: 'Projects'},
        { url: 'Contact', arg: 'Contacto', eng: 'Contact'},
    ])

    return (
        <div className='hidden fixed top-0 left-0 md:flex flex-col items-center justify-around
            h-screen w-[10%] bg-zinc-800 border-r-2 border-sky-400 text-gray-100'>
            <SwitchButton />
            
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