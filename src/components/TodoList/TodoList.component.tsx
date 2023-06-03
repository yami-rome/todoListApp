import { useEffect, useState } from "react"
import { ITask } from "../../store/task/task.model.store"
import { TaskComponent } from "../Task/Task.component"
import { EmptyTasksListElement } from "../../element/EmptyTasksList/EmptyTasksList.element"
import { WrapperTodoList } from "./TodoList.styled"


interface ITodoListComponent {
    onDeleteTask: (task: ITask) => void
    onUpdateTask: (taskUpdated: ITask) => void
    onChangeTaskPosition: (taskA: ITask, taskB: ITask) => void
    onChangeTaskFavorite: (task: ITask) => void
    onStatusTask: (task: ITask, status: 'pending' | 'progress' | 'success') => void
    todoList: ITask[]
    todoListFiltered: ITask[]
    todoListPaginated: ITask[]
}

export const TodoListComponent = (props: ITodoListComponent) => {
    
    const [todoListView, setTodoListView] = useState<Array<{ id: number, isMaximized: boolean }>>([])

    useEffect(() => {
        setTodoListView(props.todoList.map(task => ({
            id: task.id,
            isMaximized: false
        })))
    }, [props.todoList])

    const getIsMaximizedTaskHandler = (taskView: ITask): boolean => {
        const taskMaximizedFinded = todoListView.find(task => task.id === taskView.id)
        if (taskMaximizedFinded === undefined) return false
        else return taskMaximizedFinded.isMaximized
    }

    const onMaximizedHandler = (task: ITask): void => {
        setTodoListView(todoListView.map(taskView => {
            if (taskView.id === task.id) return { ...taskView, isMaximized: true }
            else return taskView
        }))
    }

    const onMinimizedHandler = (task: ITask): void => {
        setTodoListView(todoListView.map(taskView => {
            if (taskView.id === task.id) return { ...taskView, isMaximized: false }
            else return taskView
        }))
    }

    const onUpTaskHandler = (task: ITask): void => {
        const firstTaskIndexFinded = props.todoList.findIndex(taskItered => taskItered.id === task.id)
        if (firstTaskIndexFinded < 1) return
        const secondTaskIndexFinded = props.todoList[firstTaskIndexFinded - 1]
        if (!secondTaskIndexFinded) return
        props.onChangeTaskPosition(task, secondTaskIndexFinded)
    }

    const onDownTaskHandler = (task: ITask): void => {
        const firstTaskIndexFinded = props.todoList.findIndex(taskItered => taskItered.id === task.id)
        if (firstTaskIndexFinded < 1 && firstTaskIndexFinded > props.todoList.length) return
        const secondTaskIndexFinded = props.todoList[firstTaskIndexFinded + 1]
        if (!secondTaskIndexFinded) return
        props.onChangeTaskPosition(task, secondTaskIndexFinded)
    }


    const getIsDisabledUpButton = (task: ITask): boolean => {
        const prevTaskDisabledFinded: number = props.todoList.findIndex(taskDisabled => taskDisabled.id === task.id)
        if (prevTaskDisabledFinded <= 0) return true
        else return false
    }

    const getIsDisabledDownButton = (task: ITask): boolean => {
        const nextTaskDisabledButton = props.todoList.findIndex(taskDisabled => taskDisabled.id === task.id)
        if (nextTaskDisabledButton < props.todoList.length - 1) return false
        else return true
    }

    const onChangeFavoriteTaskButtonHandler = (task: ITask): void => {
        props.onChangeTaskFavorite(task)
    }

    const onStatusTaskHandler = (task: ITask, status: 'pending' | 'progress' | 'success') => {
        props.onStatusTask(task, status)
    }

    return (
        <>
            <WrapperTodoList>
                {
                    props.todoListFiltered.length === 0 ?
                        <EmptyTasksListElement /> :
                        props.todoListPaginated.map((task: ITask, index: number) => (
                            <TaskComponent
                                task={task}
                                key={`${index}`}
                                onDelete={props.onDeleteTask}
                                onUpdate={props.onUpdateTask}
                                isMaximized={getIsMaximizedTaskHandler(task)}
                                onMaximized={onMaximizedHandler}
                                onMinimized={onMinimizedHandler}
                                onUpTask={onUpTaskHandler}
                                onDownTask={onDownTaskHandler}
                                isDisabledUpdButton={getIsDisabledUpButton(task)}
                                isDisabledDownButton={getIsDisabledDownButton(task)}
                                onChangeFavoriteTaskButton={onChangeFavoriteTaskButtonHandler}
                                onSelectedStatus={onStatusTaskHandler}
                            />
                        ))
                }
            </WrapperTodoList>
        </>
    )
}