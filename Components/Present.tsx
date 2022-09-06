import { useState } from 'react';


export default function Present(){
    const [english, setEnglish] = useState(false);

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full ' id='About'>
            <button className='fixed top-10 right-5 bg-black w-max h-max p-4 text-white'
            onClick={() => setEnglish(!english)} >X</button>
            
            <h1 className='text-center font-bold text-2xl p-4 border rounded-full' >
                {
                    english
                    ? 'Hi, my name is '
                    : 'Hola, mi nombre es '
                } Alfredo Blanco.
            </h1>
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
            <span>
                {
                    english
                    ? "Let's know more about me..."
                    : 'Veamos un poco más sobre mi...'
                }
            </span>
            
        </div>
    )
}