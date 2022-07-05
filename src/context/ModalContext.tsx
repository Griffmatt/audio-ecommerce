
import React, { createContext, useContext, ReactNode, useState } from 'react'

interface ModalContextProviderProps{
    children: ReactNode
}

type ModalContextType = {
    handleModalClick: () => void,
    closeModal: () => void,
    modalShown: boolean
}

const ModalContext = createContext({} as ModalContextType)

export function useModal() {
  return useContext(ModalContext)
}


export function ModalContextProvider({ children }: ModalContextProviderProps){
    const [modalShown, setModalShown] = useState(false)

    const handleModalClick = () => {
        setModalShown(!modalShown)
    }

    function closeModal() {
        setModalShown(false)
    }

    return (
        <ModalContext.Provider value={{handleModalClick, closeModal, modalShown}}>
            {children}
        </ModalContext.Provider>
    )
}