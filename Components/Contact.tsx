import React from 'react';
import styles from '../styles/Home.module.css';
import Cards from './Cards';
import { useEnglish } from '../context/englishContext';
import { GiRotaryPhone } from 'react-icons/gi';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

export default function Contact(){
    const { english } = useEnglish();

    return (
        <div id='Contact' className='relative flex flex-col items-center h-screen w-screen md:w-[90%] bg-gray-900'>
            <div className='flex items-center justify-center w-full h-[30vh] bg-slate-200 rounded-b-full' >
                <h1 className='text-4xl p-4 xs:border-b-2 border-sky-400 rounded-full uppercase'>
                    {
                        english
                        ? 'Contact me'
                        : 'Contactame'
                    }
                </h1>
            </div>
            <div className={styles.grid}>
            
                <Cards Icon = {AiOutlineMail} name={'alfre.blanco@icloud.com'} copy={true}/>
                
                <Cards Icon = {GiRotaryPhone} name={'(+54) 1136574044'} copy={true}/>

                <a href={'https://www.linkedin.com/in/ablanco-fullstack/'} target='_blank' rel="noopener noreferrer">
                    <Cards Icon = {AiOutlineLinkedin} name={'/ablanco-fullstack'}/>
                </a>
                <a href={'https://github.com/AlfredoBlanco'} target='_blank' rel="noopener noreferrer">
                    <Cards Icon = {FiGithub} name={'AlfredoBlanco'}/>
                </a>
                

            </div>
        </div>
    )
}