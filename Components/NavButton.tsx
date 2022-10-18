import Link from "next/link";
import { useEnglish } from "../context/englishContext";


interface Props{
    url: string;
    arg: string;
    eng: string;
}

export default function NavButton({ url, arg, eng} : Props) {
    const { english } = useEnglish();
    
    return (
        <Link href={`#${url}`} passHref>
            <button className="relative text-left indent-1 lg:indent-2 w-full py-2 border-l-2 cursor-pointer
                hover:border-blue-600 group">
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