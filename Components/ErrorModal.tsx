import { useEnglish } from "../context/englishContext";
import { AiOutlineClose } from 'react-icons/ai';


interface Err {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    body?: boolean;
}

interface ModalInfo {
    show: boolean;
    err: Err;
}

interface Props{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<ModalInfo>>;
    err: Err;
}

export default function ErrorModal({ show, setShow, err} : Props) {
    const { english } = useEnglish();

    const handleClose = () => {
        setShow({show: false, err: {}});
    }

    const validate = (e : string) => {
        switch(e) {
            case 'name' :
                return english
                    ? "The name can't be null and must have more than 4 characters"
                    : 'El nombre no puede ser nulo y tiene que tener mas de 4 caracteres';
            case 'email' :
                return english
                    ? "The email can't be null"
                    : 'El email no puede ser nulo';
            case 'subject' :
                return english
                    ? "The subject can't be null"
                    : 'El asunto no puede ser nulo';
            case 'body' :
                return english
                    ? "The body can't be null and must have more than 20 characters"
                    : 'El cuerpo no puede ser nulo y tiene que tener mas de 20 caracteres';

        }
    }

    return (
        <div className={`fixed top-0 left-0 flex items-center justify-center
            w-screen h-screen z-[100] scale-0 transition duration-700 bg-gray-900 bg-opacity-30
            ${show ? 'scale-[100%]' : ''} `}>
            <div className='relative flex flex-col items-center justify-evenly min-h-[60%] min-w-[60%] max-w-screen rounded-md bg-gray-100'>

                <button className='absolute top-2 left-2 p-1 xsm:border-2 rounded-md hover:bg-gray-200'
                    onClick={handleClose}>
                    <AiOutlineClose size={30} />
                </button>
                <span className="h-1 w-full bg-red-700" />
                <div className='py-4 px-2'>

                    {
                        Object.keys(err).map((e : string) => (
                            <p key={e} className='text-lg font-semibold pb-2'>{validate(e)}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}