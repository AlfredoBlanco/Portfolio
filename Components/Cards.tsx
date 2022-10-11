import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconType } from 'react-icons';
import { AiOutlineCopy, AiOutlineCloudDownload } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import styles from '../styles/Home.module.css';

interface Props{
    Icon: IconType;
    name: string;
    copy?: boolean;
    download?: boolean;
}


export default function Card({Icon, name, copy, download} : Props){
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const handleClick = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }
    const handleDownload = () => {
        setDownloaded(true);
        setTimeout(() => {
            setDownloaded(false);
        }, 3000);
    }
    /*   
         */
    return (
        <div className='w-[10rem] h-max flex-none inline-block '>
            <div className='flex flex-col items-center justify-center p-4 m-2
                rounded-md border border-cyan-700 hover:text-cyan-600'>
                <Icon size={60} />
                <div className='flex items-center justify-center h-full w-full overflow-hidden pt-2'>
                    <p className='font-medium'>{name}</p>
                    {
                        copy
                        ? (<CopyToClipboard text={name} onCopy={() => console.log('CopiadoSup')}>
                        <button onClick={() => handleClick()}>
                            {copied? <GiConfirmed /> : <AiOutlineCopy />}
                        </button>
                        </CopyToClipboard>) : ''
                    }

                </div>
                
            </div>
        </div>
    )
}