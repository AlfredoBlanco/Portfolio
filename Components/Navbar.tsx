import Link from 'next/link';
import { useEnglish } from '../context/englishContext';

export default function NavBar(){
    const { english, setEnglish } = useEnglish();
    const handleClick = () => {
        setEnglish ? setEnglish(!english) : ''
    }

    return (
        <ul className='fixed top-0 left-0 flex md:flex-col items-center justify-around
            h-max md:h-screen w-screen md:w-[10%] bg-sky-200 ' >
            <button onClick={handleClick}>
                {
                    english? 'ES' : 'EN'
                }
            </button>
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