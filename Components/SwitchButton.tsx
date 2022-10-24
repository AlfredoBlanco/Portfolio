import { useEnglish } from '../context/englishContext';


export default function SwitchButton() {
    const { english, setEnglish } = useEnglish();

    const handleClick = () => {
        setEnglish ? setEnglish(!english) : '';

    }
    
    return (
        <button className='relative flex items-center w-14 h-6 my-4 rounded-full
            transition duration-400 border-2'
            onClick={handleClick}>
            <div className={`w-7 h-7 bg-white rounded-full transition duration-400
                ${english ? 'translate-x-full bg-[url("/images/Ingles.png")]' : 'bg-[url("/images/Argentina.png")]'}
                bg-cover bg-no-repeat bg-center`} />
        </button>
    )
}