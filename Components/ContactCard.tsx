import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconType } from 'react-icons';
import { AiOutlineCopy } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import { FiExternalLink } from 'react-icons/fi';

interface Props{
    Icon: IconType;
    name: string;
    copy?: boolean;
    link?: boolean;
}


export default function Card({Icon, name, copy, link } : Props){
    const [copied, setCopied] = useState(false);
    const appearClass = 'scale-1 sm:scale-0 text-gray-100/50 sm:text-gray-100 text-transition-all duration-700 group-hover:scale-100';

    const handleClick = () => {
        setCopied(true);
    }

    const handleCopied = () => {
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className={`relative flex items-center justify-evenly px-2 xs:gap-4 min-h-[5rem]
            border-l-2 border-gray-100 group transition duration-700
            hover:border-sky-600`}>
            {
                copy
                ? (
                    <CopyToClipboard text={name} onCopy={() => handleCopied()}>

                        <button className={`absolute top-1 right-0 ${appearClass}`}
                            onClick={() => handleClick()}>
                                {
                                    copied
                                    ? <GiConfirmed className='text-sky-700'/>
                                    : <AiOutlineCopy />
                                }
                            
                        </button>
                    </CopyToClipboard>
                ) : ''
            }
            {
                link
                ? (
                    <button className={`absolute top-1 right-0 ${appearClass}`} >
                        <FiExternalLink />
                        
                    </button>
                )
                : ''
            }
            

            <Icon size={50} />

            <pre className={`${appearClass}`}>
                {name}
            </pre>
        </div>
    )
}