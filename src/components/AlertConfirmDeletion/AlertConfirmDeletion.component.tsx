import { Modal } from "../../element/Modal/Modal.component"
import { CenterText } from "../../element/Modal/Modal.styled"
import { GroupButtonsForm, Icon, PrimaryButton } from "../TaskForm/TaskForm.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
interface IAlertComponent {
    onConfirmDeletion: () => void
    onCloseModal: () => void
    isOpenModal: boolean
    message: string
}

export const AlertConfirmDeletionComponent = (props: IAlertComponent) => {
    return (
        <>
            {
                props.isOpenModal ? (
                    <Modal
                        title="ALERT"
                        isOpen={props.isOpenModal}
                        onClose={() => props.onCloseModal()}
                    >
                        <CenterText>
                            {props.message}
                        </CenterText>

                        <GroupButtonsForm>

                            <PrimaryButton
                                type="button"
                                data-testid="confirmModalButton"
                                onClick={() => props.onConfirmDeletion()}
                            >Acept
                                <Icon><FontAwesomeIcon icon={faCheck} /></Icon>
                            </PrimaryButton>

                        </GroupButtonsForm>

                    </Modal>
                ) : null
            }

        </>
    )
}