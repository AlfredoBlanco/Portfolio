import fileDownload from 'js-file-download';
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
    return (
        <div className={styles.card}>
            <Icon size={60} />
            <div className={styles.lilCard}>

            {
                copy
                ? (<CopyToClipboard text={name} onCopy={() => console.log('CopiadoSup')}>
                <button onClick={() => handleClick()}>
                    {copied? <GiConfirmed /> : <AiOutlineCopy />}
                </button>
                </CopyToClipboard>) : ''
            }
            <span>{name}</span>
            </div>
            
        </div>
    )
}