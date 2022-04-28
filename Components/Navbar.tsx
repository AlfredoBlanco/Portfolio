import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function NavBar(){
    return (
        <ul className={styles.nav}>
            <Link href='#Presentation' passHref>
                <li>Presentation</li>
            </Link>
            <Link href='#Tech' passHref>
                <li>Technologies</li>
            </Link>
            <Link href='#Projects' passHref>
                <li>Projects</li>
            </Link>
            <Link href='#Contact' passHref>
                <li>Contact</li>
            </Link>
        </ul>
    )
}