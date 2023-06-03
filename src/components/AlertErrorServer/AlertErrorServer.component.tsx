import { Modal } from "../../element/Modal/Modal.component"
import { CenterText } from "../../element/Modal/Modal.styled"

interface IAlertErrorServerComponent {
    onCloseModal: () => void
    isOpenModal: boolean
    message: string
}

export const AlertErrorServerComponent = (props: IAlertErrorServerComponent) => {
    return (
       <>
        {
                props.isOpenModal ? (
                    <Modal
                        title="ALERT"
                        isOpen={props.isOpenModal}
                        data-testid="closeAlertErrorServerButton"
                        onClose={() => props.onCloseModal()}
                    >
                        <CenterText>{props.message}</CenterText>
                      
                    </Modal>
                ) : null
            }
       </>
    )
       
}