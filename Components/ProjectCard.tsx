import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { SiLinkedin } from 'react-icons/si';

interface Props{
    img : string;
    name: string;
    url: string;
    tech: string[];
    linkedin: string;

}

export default function Card({img, name, url, tech, linkedin} : Props){
    return (
        <div className='w-max h-max p-4 border'>
            {/*<Image src={img} alt='not found' /> */}
            <div className=''>
                <span><b>About {name}</b></span> <br/>
                <div>
                    <span>Technologies used: </span><br/>
                    <ul className={``}>
                    {
                        tech.map(e =>(
                            <li key={e} className=''>
                                {e}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                
                <a href={url} target='_blank' rel="noopener noreferrer">

                    <button className=''>App link</button>
                </a>
                <a href={linkedin} target='_blank' rel="noopener noreferrer">
                    <button className=''> <SiLinkedin /> Post</button>
                </a>
            </div>
            

        </div>
    )
}