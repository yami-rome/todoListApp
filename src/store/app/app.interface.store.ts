export interface IAppStore {
    openAlertModal: () => void
    closeAlertModal: () => void
    isOpenAlertModal: boolean
}

export type TUseApiStore = () => IAppStore