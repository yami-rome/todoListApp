import React, { useState } from "react";
import { AlertConfirmDeletionComponent } from "../../components/AlertConfirmDeletion/AlertConfirmDeletion.component";
import { TaskFormComponent } from "../../components/TaskForm/TaskForm.component";
import { TodoListComponent } from "../../components/TodoList/TodoList.component";
import { FloatButtonComponent } from "../../element/FloatButton/FloatButton.component";
import { ITaskStore } from "../../store/task/task.interface.store";
import { ITask, taskDefault } from "../../store/task/task.model.store";
import { LoadingComponent } from "../../element/Loading/Loading.component";
import { PageElement } from "../../element/Page/Page.element";
import { SelectPagination } from "../../components/SelectPagination/SelectPagination.component";
import { PaginationComponent } from "../../components/Pagination/Pagination.component";
import { AppBarComponent } from "../../components/AppBar/AppBar.component";
import { todoListSearchFilterHelper } from "../../components/TodoList/TodoList.helper";
import { AlertErrorServerComponent } from "../../components/AlertErrorServer/AlertErrorServer.component";
import { IAppStore } from "../../store/app/app.interface.store";

interface ITodoListPage {
    taskStore: ITaskStore
    appStore: IAppStore
}

export const TodoListPage = (props: ITodoListPage) => {

    const [taskTarget, setTaskTarget] = useState<ITask>(taskDefault())
    const [isOpenCreateFormModal, setIsOpenCreateFormModal] = useState<boolean>(false)
    const [isOpenModalAlert, setIsOpenModalAlert] = useState<boolean>(false)
    const [isShowLoading, setIsShowLoading] = useState<boolean>(false)
    const [indexCurrentPage, setIndexCurrentPage] = useState<number>(0)
    const [taskPerPage, setTaskPerPage] = useState<number>(2)
    const [searchTask, setSearchTask] = useState<string>('')
    const [statusFilterValue, setStatusFilterValue] = useState<'all' | 'pending' | 'progress' | 'success'>('all')
    const [isFavoriteTaskFilterValue, setIsFavoriteTaskFilterValue] = useState<'all' | 'favorites' | 'not favorites'>('all')
    
    React.useEffect(() => {
        onInit()
    }, [])

    const onInit = async () => {
        setIsShowLoading(true)
        await props.taskStore.getTodoListAction()
        setIsShowLoading(false)
    }


    const onSubmitCreateOrUpdateTaskHandler = async (task: ITask) => {
        if (task.id === 0) {
            setIsShowLoading(true)
            await props.taskStore.addTaskAction(task)
            setIsShowLoading(false)
            onCloseCreateFormModalHandler()
            return
        }

        setIsShowLoading(true)
        await props.taskStore.updateTaskAction(task)
        setIsShowLoading(false)
        onCloseCreateFormModalHandler()
        return
    }

    const onDeleteTaskHandler = (task: ITask): void => {
        setTaskTarget(task)
        setIsOpenModalAlert(true)
    }

    const onConfirmDeletionHandler = async (): Promise<void> => {
        setIsShowLoading(true)
        await props.taskStore.deleteTaskAction(taskTarget.id)
        setIsShowLoading(false)
        setIsOpenModalAlert(false)
    }

    const onCloseAlertModalHandler = (): void => {
        setIsOpenModalAlert(false)
    }

    const onCloseCreateFormModalHandler = (): void => {
        setIsOpenCreateFormModal(false)
    }

    const openModalCreateTaskFormHandler = (): void => {
        setIsOpenCreateFormModal(true)
    }

    const resetForm = () => setTaskTarget(taskDefault())

    const onUpdateTaskHandler = async (taskUpdated: ITask): Promise<void> => {
        resetForm()
        setTaskTarget(taskUpdated)
        setIsOpenCreateFormModal(true)
    }

    const onChangeTaskPositionHandler = (taskA: ITask, taskB: ITask): void => {
        props.taskStore.changeTaskPositionAction(taskA, taskB)
    }

    const onChangeTaskFavoriteHandler = (task: ITask): void => {
        props.taskStore.updateTaskAction({ ...task, isFavorite: !task.isFavorite })
    }
    const onStatusTaskHandler = (task: ITask, status: 'pending' | 'progress' | 'success') => {
        props.taskStore.updateTaskAction({ ...task, status })
    }

    const onChangeRowPerPageHandler = (numberPage: number): void => {
        setIndexCurrentPage(0)
        setTaskPerPage(numberPage)
    }

    const onPrevPageButtonHandler = (): void => {
        if (indexCurrentPage > 0)
            setIndexCurrentPage(indexCurrentPage - 1)
    }

    const onNextPageButtonHandler = () => {
        if (indexCurrentPage < totalPage)
            setIndexCurrentPage(indexCurrentPage + 1)
    }

    const onChangeSearchTaskInputHandler = (value: string): void => {
        setSearchTask(value)
    }

    const onSelectedStatusHandler = (status: 'all' | 'pending' | 'progress' | 'success') => {
        setStatusFilterValue(status)
    }

    const onSelectFavoriteFilterHandler = (value: 'all' | 'favorites' | 'not favorites'): void => {
        setIsFavoriteTaskFilterValue(value)
    }

    const totalPage: number = Math.ceil(props.taskStore.todoList.length / taskPerPage)

    const todoListPageSorted: ITask[] = props.taskStore.todoList.sort((a, b) => b.position - a.position)

    const todoListPageFiltered: ITask[] = todoListSearchFilterHelper(todoListPageSorted, { isFavoriteTaskFilterValue, searchTask, statusFilterValue })

    const firtIndexPagePaginated = indexCurrentPage * taskPerPage

    const lastIndexPagePaginated = firtIndexPagePaginated + taskPerPage

    const todoListPagePaginated = todoListPageFiltered.filter((task: ITask, index: number) =>
        index >= firtIndexPagePaginated && index < lastIndexPagePaginated)


    return (
        <PageElement>
            <LoadingComponent
                isOpen={isShowLoading}
                message="Please wait..."
            />

            <AlertConfirmDeletionComponent
                onConfirmDeletion={onConfirmDeletionHandler}
                onCloseModal={onCloseAlertModalHandler}
                isOpenModal={isOpenModalAlert}
                message={'Are you sure you want to delete this task?'}
            />

            <AlertErrorServerComponent
                onCloseModal={props.appStore.closeAlertModal}
                isOpenModal={props.appStore.isOpenAlertModal}
                message={'Error Server'}
            />

            <AppBarComponent
                searchTask={searchTask}
                onChangeSearchTaskInput={onChangeSearchTaskInputHandler}
                onSelectedStatus={onSelectedStatusHandler}
                selectedStatus={statusFilterValue}
                onSelectedFavoriteValues={onSelectFavoriteFilterHandler}
                selectedFavoriteValue={isFavoriteTaskFilterValue}
            />

            <PaginationComponent
                todoList={props.taskStore.todoList}
                currentPage={indexCurrentPage}
                onPrevPageButton={onPrevPageButtonHandler}
                onNextPageButton={onNextPageButtonHandler}
                totalPage={totalPage}
            />

            <SelectPagination
                onChangeRowPerPage={onChangeRowPerPageHandler}
                taskPerPage={taskPerPage}
            />


            <TaskFormComponent
                task={taskTarget}
                onSubmitTask={onSubmitCreateOrUpdateTaskHandler}
                formButtonText={taskTarget.id === 0 ? 'Create' : 'Save'}
                isOpenCreateFormModal={isOpenCreateFormModal}
                onCloseCreateFormModal={onCloseCreateFormModalHandler}
            />

            {
                <TodoListComponent
                    todoList={props.taskStore.todoList}
                    onDeleteTask={onDeleteTaskHandler}
                    onUpdateTask={onUpdateTaskHandler}
                    onChangeTaskPosition={onChangeTaskPositionHandler}
                    onChangeTaskFavorite={onChangeTaskFavoriteHandler}
                    onStatusTask={onStatusTaskHandler}
                    todoListFiltered={todoListPageFiltered}
                    todoListPaginated={todoListPagePaginated}
                />
            }

            <FloatButtonComponent
                openModalCreateTaskForm={openModalCreateTaskFormHandler}
            />
        </PageElement>
    )
}