import { useEnglish } from "../context/englishContext";
import { BiErrorCircle } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';

interface Props {
    show: boolean;
    success: boolean;
}

export default function ErrorModal({ show, success} : Props) {
    const { english } = useEnglish();

    return (
        <div className={`absolute bottom-2 flex items-center justify-center
            gap-2 p-2 transition duration-1000 bg-gray-50 bg-opacity-90
            rounded-md ${show ? 'visible -translate-y-20' : 'invisible'}`}>
            
            {
                success
                ? english ? 'Email sended' : 'Email enviado'
                : english ? 'Error occurred' : 'Ocurrió un error'
            }
            {
                success
                ? <RiMailSendLine size={20} />
                : <BiErrorCircle size={20} />
            }
        </div>
    )
}