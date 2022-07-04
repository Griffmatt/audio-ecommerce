
import React, { createContext, useContext, ReactNode, useState } from 'react'

interface ModalContextProviderProps{
    children: ReactNode
}

type ModalContextType = {
    handleModalClick: () => void,
    hideModal: boolean
}

const ModalContext = createContext({} as ModalContextType)

export function useModal() {
  return useContext(ModalContext)
}


export function ModalContextProvider({ children }: ModalContextProviderProps){
    const [hideModal, setHideModal] = useState(false)

    const handleModalClick = () => {
        setHideModal(!hideModal)
    }

    return (
        <ModalContext.Provider value={{handleModalClick, hideModal}}>
            {children}
        </ModalContext.Provider>
    )
}