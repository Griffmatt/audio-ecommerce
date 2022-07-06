
import React, { createContext, useContext, ReactNode, useState } from 'react'

interface ModalContextProviderProps{
    children: ReactNode
}

type ModalContextType = {
    handleModalClick: (arg0:string) => void,
    closeModal: () => void,
    showCheckoutModal: boolean,
    showConfirmedModal: boolean,
}

const ModalContext = createContext({} as ModalContextType)

export function useModal() {
  return useContext(ModalContext)
}


export function ModalContextProvider({ children }: ModalContextProviderProps){
    const [showCheckoutModal, setShowCheckoutModal] = useState(false)
    const [showConfirmedModal, setShowConfirmedModal] = useState(false)

    function handleModalClick(type: string) {
        if(type==="checkout"){ 
            setShowCheckoutModal(!showCheckoutModal)
            return
        }
        if(type==="confirm"){
            setShowConfirmedModal(!showConfirmedModal)
        }
    }

    const closeModal = () => {
        setShowCheckoutModal(false)

        setShowConfirmedModal(false)
    }


    return (
        <ModalContext.Provider value={{handleModalClick, closeModal, showConfirmedModal, showCheckoutModal}}>
            {children}
        </ModalContext.Provider>
    )
}