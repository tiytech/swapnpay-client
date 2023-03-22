/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useReducer, useState } from 'react'

import { root__modals } from '../data'

const Context = createContext()

export const GlobalContext = ({ children }) => {
    const [activeLink, setActiveLink] = useState('')
    const [pageTitle, setPageTitle] = useState('dashboard')
    const [modals, updateModals] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { ...root__modals })

    return (
        <Context.Provider value={{
            modals,
            updateModals,
            pageTitle,
            setPageTitle,
            activeLink,
            setActiveLink,
        }}>
            {children}
        </Context.Provider>
    )
}


export const useGlobalContext = () => useContext(Context)