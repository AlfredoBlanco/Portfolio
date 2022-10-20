import React, { useState } from "react";
import axios from 'axios';
import { useEnglish } from "../context/englishContext"
import ErrorModal from "./ErrorModal";
import ResultModal from "./ResultModal";

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
interface ResultInfo {
    show: boolean;
    success: boolean;
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
    const [sending, setSending] = useState<boolean>(false);
    const [show, setShow] = useState<ResultInfo>({
        show: false,
        success: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value 
        })
    }

    const send = async () => {
        const result = await axios.post('/api/mail',{
            ...info,
        }).then(r => r.data.ok);

        setShow({ show: true, success: result});
        setSending(false);
        setInfo({
            name: '',
            email: '',
            phone: '',
            subject: '',
            body: '',
        })
        setTimeout(() => {
            setShow({ show: false, success: false})
        }, 4000);

    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        const errors : Err = validate(info);

        if(!Object.keys(errors).length){
            send();
        } else {
            setModalInfo({
                show: true,
                err: errors,
            })
            setSending(false);
            setInfo({
                name: '',
                email: '',
                phone: '',
                subject: '',
                body: '',
            })
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
                <div className={`w-12 h-12 border-4 border-gray-300 border-b-gray-50
                    rounded-full animate-spin ${sending? 'block' : 'hidden'}`} />
                <button className={`p-2 border-2 border-sky-300 rounded-lg transition duration-400
                    hover:bg-sky-300 hover:text-[#000] ${sending ? 'hidden' : 'block'}`} >
                    {
                        english
                            ? 'Send'
                            : 'Enviar'
                    }
                </button>
            </form>
            <ErrorModal show={modalInfo.show} err={modalInfo.err} setShow={setModalInfo} />
            <ResultModal show={show.show} success={show.success} />
        </>
    )
}