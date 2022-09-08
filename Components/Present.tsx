import { useEffect, useState } from 'react';


export default function Present(){
    const [english, setEnglish] = useState(false);
    const [show, setShow] = useState(false);

    /* useEffect(() => {
        setTimeout(() => {
            setShow(!show);
        }, 3000)
    }, [show]); */

    return (
        <div className='flex flex-col items-center justify-between h-screen w-screen md:w-[90%] text-gray-50 bg-zinc-900 ' id='About'>
            <button className='absolute top-10 right-5 bg-black w-max h-max p-4 text-white'
            onClick={() => setEnglish(!english)} >X</button>
            <div className='flex flex-col justify-center items-center bg-zinc-700 h-2/5 xs:h-1/3 w-full'>
                
                <h1 className='text-5xl font-bold text-center pt-4 xs:py-2' >
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
            <div className='flex justify-center items-center h-3/5 xs:h-2/3 w-full'>
                {
                    english
                    ? (
                        <p>
                            {"I'm"} a passionate Argentinian developer who wants to keep learning new things every day.<br />
                            This IT word is huge and I want to know most of it.<br/>
                            Thats why {"I'm"} always looking for challenges and dare myself.
                        </p>
                    )
                    : (
                        <p>
                            Soy un desarrollador Argentino, apasionado por aprender cosas nueva todos los días. <br />
                            El mundo IT es enorme y me gustaría conocerlo todo. <br />
                            Es por eso que siempre estoy desafiandome a mi mismo.
                        </p>
                    )
                }
            </div>
            
        </div>
    )
}