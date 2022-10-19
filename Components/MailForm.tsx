import React, { useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useEnglish } from "../context/englishContext"
import ErrorModal from "./ErrorModal";

interface Info {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    body: string;
}
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

export default function Form() {
    const { english } = useEnglish();
    const [info, setInfo] = useState<Info>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        body: '',
    });
    const [modalInfo, setModalInfo] = useState<ModalInfo>({
        show: false,
        err: {},
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        const errors : Err = validate(info);
        if(!Object.keys(errors).length){
            console.log('Envio el mail');
        } else {
            setModalInfo({
                show: true,
                err: errors,
            })
            console.log('Seteo el modal');
        }
    }

    const validate = (e : Info) => {
        let err : Err = {};
        if(!e.name || e.name.trim().length < 4) err.name = true;
        if(!e.email) err.email = true;
        if(!e.subject.trim()) err.subject = true;
        if(!e.body || e.body.trim().length < 20) err.body = true;
        return err;
    }

    return (
        <>
            <form className='flex flex-col items-center min-w-[30%] text-gray-50 gap-2'
                onSubmit={handleSubmit} >
                <h1 className='uppercase text-xl text-center'>
                {
                    english
                    ? 'Email me...'
                    : 'Envia un email...'
                }
                </h1>
                <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[35%]">
                    {
                        english
                        ? 'Name :'
                        : 'Nombre :'
                    }
                </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'
                    placeholder={english ? 'Required' : 'Requerido'}
                    name={'name'} onChange={handleChange} value={info.name} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[35%]">Email : </label>
                <input type="email" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'
                    placeholder={english ? 'Required' : 'Requerido'}
                    name={'email'} onChange={handleChange} value={info.email} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[35%]">
                    {
                        english
                        ? 'Phone :'
                        : 'Movil :'
                    }
                </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'
                    placeholder={english ? 'Optional' : 'Opcional'}
                    name={'phone'} onChange={handleChange} value={info.phone} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[35%]">
                    {
                        english
                        ? 'Subject :'
                        : 'Asunto :'
                    }
                </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'
                    placeholder={english ? 'Required' : 'Requerido'}
                    name={'subject'} onChange={handleChange} value={info.subject} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[35%]">
                    {
                        english
                        ? 'Body :'
                        : 'Cuerpo :'
                    }
                </label>
                <textarea className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'
                    placeholder={english ? 'Required' : 'Requerido'}
                    name={'body'} onChange={handleChange} value={info.body} />
                </div>
                <button className='p-2 border-2 border-sky-300 rounded-lg transition duration-400 hover:bg-sky-300 hover:text-[#000]' >
                    {
                        english
                        ? 'Send'
                        : 'Enviar'
                    }
                </button>
            </form>
            <ErrorModal show={modalInfo.show} err={modalInfo.err} setShow={setModalInfo} />
        </>
    )
}