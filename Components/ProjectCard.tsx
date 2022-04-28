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
        <div className={styles.Pcard}>
            <Image src={img} alt='not found' />
            <div className={styles.info}>
                <span><b>About {name}</b></span> <br/>
                <div>
                    <span>Technologies used: </span><br/>
                    <ul className={`${styles.grid} ${styles.ulist}`}>
                    {
                        tech.map(e =>(
                            <li key={e} className={styles.list}>
                                {e}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                
                <a href={url} target='_blank' rel="noopener noreferrer">

                    <button className={styles.link}>App link</button>
                </a>
                <a href={linkedin} target='_blank' rel="noopener noreferrer">
                    <button className={styles.link}> <SiLinkedin /> Post</button>
                </a>
            </div>
            

        </div>
    )
}