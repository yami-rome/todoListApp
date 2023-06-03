import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FloatButton } from './FloatButton.styled'


interface IFloatButton {
    openModalCreateTaskForm: () => void
}

export const FloatButtonComponent = (props: IFloatButton) => {
    return (
        <>
            <FloatButton type="button" onClick={() => props.openModalCreateTaskForm()} data-testid='addTaskButton'>
                <FontAwesomeIcon icon={faPlus} />
            </FloatButton>
        </>
    )
}
