/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from 'react'

import { root__modals } from '../data'

const Context = createContext()

export const GlobalContext = ({ children }) => {
    const [activeLink, setActiveLink] = useState('')
    const [pageTitle, setPageTitle] = useState('dashboard')
    const [modals, setModals] = useState({ ...root__modals })

    return (
        <Context.Provider value={{
            modals,
            setModals,
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