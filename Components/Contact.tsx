import React, { useState } from 'react';
import Card from './ContactCard';
import { useEnglish } from '../context/englishContext';
import { GiRotaryPhone } from 'react-icons/gi';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import MailForm from './MailForm';

interface Contacts{
    Icon: IconType;
    name: string;
    copy?: boolean;
    link?: string;
}

export default function Contact(){
    const { english } = useEnglish();
    const [ contacts ] = useState<Contacts[]>([
        { Icon: AiOutlineMail, name: 'alfre.blanco@icloud.com', copy: true},
        { Icon: GiRotaryPhone, name: '(+54) 1136574044', copy: true},
        { Icon: AiOutlineLinkedin, name: '/ablanco-fullstack', link: 'https://www.linkedin.com/in/ablanco-fullstack/'},
        { Icon: FiGithub, name: 'AlfredoBlanco', link: 'https://github.com/AlfredoBlanco'},
    ])

    return (
        <div id='Contact' className='relative flex flex-col items-center min-h-screen w-screen md:w-[90%] bg-zinc-900'>
            <div className='flex items-center justify-center w-full h-[30vh] bg-slate-200 rounded-b-full' >
                <h1 className='text-4xl p-4 xs:border-b-2 border-sky-400 rounded-full uppercase'>
                    {
                        english
                        ? 'Contact me'
                        : 'Contactame'
                    }
                </h1>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-evenly my-4 w-full h-full'>

                <div className='flex flex-col items-start justify-center xsm:w-max text-gray-100' >
                    {
                        contacts.map((e : Contacts, i : number) => (
                            e.link
                            ? (
                                <a key={i} href={e.link} target='_blank' rel="noopener noreferrer">
                                    <Card  Icon={e.Icon} name={e.name} link={true} />
                                </a>
                            ) : (

                                <Card key={i} Icon={e.Icon} name={e.name} copy={e.copy} />
                            )
                        ))
                    }
                
                </div>
                <MailForm />
            </div>
        </div>
    )
}
