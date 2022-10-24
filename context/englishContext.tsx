import React, { createContext, useContext, useState } from 'react';

type props = {
    children : JSX.Element | JSX.Element[]
}
type contextProps = {
    english : boolean,
    setEnglish ?: React.Dispatch<React.SetStateAction<boolean>>
}

export const EnglishContext = createContext<contextProps>({ english : false});

export const useEnglish = () => useContext(EnglishContext);


export const EnglishProvider = ({ children } : props) => {
    const [english, setEnglish] = useState<boolean>(false)
    return (
        <EnglishContext.Provider value={{ english, setEnglish }}>{ children }</EnglishContext.Provider>
    )
}
