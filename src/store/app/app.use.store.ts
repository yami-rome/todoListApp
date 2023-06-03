import { useEffect, useState } from "react"
import { TUseApiStore } from "./app.interface.store"

export const useAppStore: TUseApiStore = () => {

    const [isOpenAlertModal, setIsOpenAlertModal] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('serverError', openAlertModal)
    }, [])

    const openAlertModal = () => {
        setIsOpenAlertModal(true)
    }

    const closeAlertModal = () => {
        setIsOpenAlertModal(false)
    }

    return {
        openAlertModal,
        closeAlertModal,
        isOpenAlertModal
    }
}