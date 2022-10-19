
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

    const handleClose = () => {
        setShow({show: false, err: {}});
    }

    return (
        <div className={`fixed top-0 left-0 flex items-center justify-center
            w-screen h-screen z-[100] scale-0 transition duration-700
            ${show ? 'scale-[100%]' : ''} `}>
            <div className='h-[60%] w-[60%] bg-white'>

            <button onClick={handleClose}>XXXX</button>
            </div>
        </div>
    )
}