import React from 'react';
import styles from '../styles/Home.module.css';
import Cards from './Cards';
import { GiRotaryPhone } from 'react-icons/gi';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

export default function Contact(){
    return (
        <div className={styles.main} id='Contact'>
            <h1>Contact me</h1>
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