/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useReducer, useState } from 'react'

import { modal__pages, root__modals } from '../data'

const Context = createContext()

export const GlobalContext = ({ children }) => {
    const [pageTitle, setPageTitle] = useState('dashboard')

    const [modals, updateModals] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { ...root__modals })

    const [modalPages, updateModalPages] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { ...modal__pages })

    const [dashboardConfig, updateDashboardConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        activeLink: 'Home', showSideBar: true,
    })

    return (
        <Context.Provider value={{
            modals,
            updateModals,
            pageTitle,
            setPageTitle,
            dashboardConfig,
            modalPages,
            updateModalPages,
            updateDashboardConfig,
        }}>
            {children}
        </Context.Provider>
    )
}


export const useGlobalContext = () => useContext(Context)