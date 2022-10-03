import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { SiLinkedin } from 'react-icons/si';

interface Props{
    img ?: string;
    name?: string;
    url: string;
    tech?: string[];
    linkedin?: string;

}

export default function Card({img, name, url, tech, linkedin} : Props){
    return (
        <div className={`h-full w-full border-2 border-blue-800 animate-appear`}>
            <Image src={`/images/${url}.png`} alt='not found' height={400} width={500} className='https://www.youtube.com/watch?v=EWO0WIATQ1g' />
            {/* <div className='flex flex-col items-center border-2 border-sky-300'>
                <span><b>About {name}</b></span> <br/>
                <div>
                    <span>Technologies used: </span><br/>
                    <ul className='flex'>
                    {
                        tech.map(e =>(
                            <li key={e} className=''>
                                {e}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className='flex'>
                    <a href={url} target='_blank' rel="noopener noreferrer">

                        <button className=''>App link</button>
                    </a>
                    <a href={linkedin} target='_blank' rel="noopener noreferrer">
                        <button className=''> <SiLinkedin /> Post</button>
                    </a>
                </div>
            </div> */}
            

        </div>
    )
}