import Link from "next/link";
import { IconType } from "react-icons/lib";
import { useEnglish } from "../context/englishContext";


interface Props{
    Icon?: IconType;
    url: string;
    arg: string;
    eng: string;
}

export default function NavButton({ Icon, url, arg, eng} : Props) {
    const { english } = useEnglish();
    
    return (
        <Link href={`#${url}`} passHref>
            <button className={`relative text-left indent-1 lg:indent-2 w-full py-2 cursor-pointer
                hover:border-blue-600 md:border-l-2 uppercase md:normal-case group
                ${Icon ? 'flex items-center gap-2' : ''}`}>
                {
                    Icon
                    ? <Icon size={20} />
                    : ''
                }
                {
                    english
                    ? eng
                    : arg
                }
                <div className='absolute bottom-0 right-[100%] w-full h-[1px] bg-blue-500
                    transition duration-1000 group-hover:translate-x-full' />
            </button>
        </Link>
    )
}