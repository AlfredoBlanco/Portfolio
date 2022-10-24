import { useEffect, useState } from 'react';

import { useEnglish } from '../context/englishContext';


export default function Present(){
    const [show, setShow] = useState(false);
    const { english } = useEnglish();

    useEffect(() => {
        setTimeout(() => {
            setShow(!show);
        }, 3000)
    }, [show]);

    return (
        <div className='relative flex flex-col items-center justify-between min-h-screen w-screen md:w-[90%] text-gray-50 bg-zinc-900 ' id='About'>
            
            <div className='flex flex-col justify-center items-center bg-zinc-700 h-[40vh] xs:h-[33vh] w-full'>
                
                <h1 className='text-5xl font-bold text-center pt-4 xs:pt-4' >
                    {
                        english
                        ? 'Hi, I am'
                        : 'Hola, yo soy'
                    }
                    
                </h1>
                <div className='relative text-5xl font-bold m-2 w-full h-[50%] overflow-hidden'>
                    <div className={`h-full absolute bottom-[100%] w-full h-full flex items-center justify-center text-center 
                        transition duration-700 ease-out ${show ? '' : 'translate-y-[100%]'} `} >Alfredo Blanco</div>
                    <div className={`h-full absolute top-[100%] w-full h-full flex items-center justify-center text-center 
                        transition duration-700 ${show ? '-translate-y-[100%]' : ''}`} >Full Stack Developer</div>
                </div>
                
            </div>
            <div className='flex justify-center items-center h-3/5 xs:h-[66vh] sm:w-[60%] mb-2 px-1'>
                {
                    english
                    ? (
                        <p className='text-center text-xl font-semibold'>
                            {"I'm"} 22 years old, when I started programming I was studying industrial engineering, 
                            it was a before and after in my carreer. 
                            Since then, {"I'm"} always looking for challenges and dare myself every day to learn 
                            new things.
                            I have a lot of energy and enthusiasm to keep growing inside this huge IT world.
                        </p>
                    )
                    : (
                        <p className='text-center text-xl font-semibold'>
                            Tengo 22 años, cuando empecé a programar estaba estudiando ingeniería industrial, 
                            fue un antes y después en mi carrera.
                            Desde ese momento que busco superarme y desafiarme cada día más para aprender cosas nuevas. 
                            Tengo mucha energía y entusiasmo por seguir creciendo dentro de este gran mundo de la tecnología.
                        </p>
                    )
                }
            </div>
            <a href='/Alfredo_Blanco_CV.pdf' target='_blank' rel="noopener noreferrer">
                <button className='relative xs:absolute bottom-2 right-2 my-2 p-2 px-4 border-2 rounded-xl
                    hover:shadow-md hover:shadow-[#fff] hover:border-transparent'>
                    {
                        english
                        ? 'See CV'
                        : 'Ver CV'
                    }
                </button>
            </a>
        </div>
    )
}