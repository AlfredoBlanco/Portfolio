import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function NavBar(){
    return (
        <ul className='fixed top-0 left-0 flex md:flex-col items-center justify-around
            h-max md:h-screen w-screen md:w-[10%] bg-sky-200 ' >
            <Link href='#About' passHref>
                <li>About</li>
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