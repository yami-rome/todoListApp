import { useEffect, useState } from "react"
import { ITask, taskDefault } from "../../store/task/task.model.store"
import { DefaultButton, Form, GroupButtonsForm, Icon, InputForm, LabelForm, PrimaryButton, SecondaryButton, SelectForm } from "./TaskForm.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faRotateRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Modal } from "../../element/Modal/Modal.component"
import { ModalContent } from "../../element/Modal/Modal.styled"

interface ITaskFormComponent {
    onCloseCreateFormModal: () => void
    onSubmitTask: (taskForm: ITask) => void
    task: ITask
    formButtonText: string
    isOpenCreateFormModal: boolean
}

export const TaskFormComponent = (props: ITaskFormComponent) => {
    const [taskForm, setTaskForm] = useState<ITask>(taskDefault())

    useEffect(() => {
        setTaskForm(props.task)
    }, [props.task])

    const onChangeTitleInput = (value: string) => {
        setTaskForm({ ...taskForm, title: value })
    }
    const onChangeDescriptionInput = (value: string) => {
        setTaskForm({ ...taskForm, description: value })
    }

    const onSubmitCreateTaskButton = () => {
        props.onSubmitTask(taskForm)
        onResetFormButton()
    }

    const onResetFormButton = () => {
        setTaskForm(taskDefault())
    }

    const onCancelFormButton = () => {
        props.onCloseCreateFormModal()
    }

    const onChangeStatusHandler = (value: string) => {
        if (value === 'pending') setTaskForm({ ...taskForm, status: value })
        if (value === 'progress') setTaskForm({ ...taskForm, status: value })
        if (value === 'success') setTaskForm({ ...taskForm, status: value })
    }

    return (
        <>
            {props.isOpenCreateFormModal ? (
                <Modal
                    title={props.task.id === 0 ? "CREATE YOUR TASK" : "EDIT YOUR TASK"}
                    isOpen={props.isOpenCreateFormModal}
                    onClose={() => props.onCloseCreateFormModal()}
                >
                    <ModalContent>

                        <Form>
                            <LabelForm>Title </LabelForm>
                            <InputForm
                                type="text"
                                value={taskForm.title}
                                onChange={(e) => onChangeTitleInput(e.target.value)}
                                data-testid='inputTitleForm'
                            />

                            <LabelForm>Description</LabelForm>
                            <InputForm
                                type="text"
                                value={taskForm.description}
                                onChange={(e) => onChangeDescriptionInput(e.target.value)}
                                data-testid='inputDescriptionForm'
                            />

                            <LabelForm>Status</LabelForm>
                            <SelectForm
                                disabled={taskForm.id === 0}
                                data-testid='selectStatusForm'
                                placeholder="Status"
                                value={taskForm.status}
                                onChange={(e) => onChangeStatusHandler(e.target.value)}
                            >
                                <option value={'pending'}>Pending</option>
                                <option value={'progress'}>Progress</option>
                                <option value={'success'}>Success</option>
                            </SelectForm>

                            <GroupButtonsForm>
                                <PrimaryButton
                                    type="submit"
                                    data-testid='createNewTaskButtonForm'
                                    onClick={onSubmitCreateTaskButton}>
                                    {props.formButtonText} <Icon><FontAwesomeIcon icon={faFloppyDisk} /></Icon>
                                </PrimaryButton>

                                <DefaultButton
                                    type="reset"
                                    data-testid='resetButtonForm'
                                    onClick={onResetFormButton}>
                                    Reset
                                    <Icon><FontAwesomeIcon icon={faRotateRight} /></Icon>
                                </DefaultButton>

                                <SecondaryButton
                                    type="button"
                                    data-testid='cancelButtonForm'
                                    onClick={onCancelFormButton}>Cancel
                                    <Icon><FontAwesomeIcon icon={faXmark} /></Icon>
                                </SecondaryButton>
                            </GroupButtonsForm>
                        </Form>
                    </ModalContent>
                </Modal>
            ) : null}
        </>
    )
}