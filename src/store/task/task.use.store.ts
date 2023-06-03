import { useState } from "react";
import { ITaskStore, TUseTaskStore } from "./task.interface.store";
import { ITask } from "./task.model.store";
import { useTaskService } from "./task.service.store";


export const useTaskStore: TUseTaskStore = () => {
    const taskService = useTaskService()
    const [todoList, setTodoList] = useState<ITaskStore['todoList']>([])

    const getTodoListAction: ITaskStore['getTodoListAction'] = async () => {
        const response = await taskService.getTodoList()
        setTodoList(response)
        return response
    }

    const getTaskAction: ITaskStore['getTaskAction'] = async (id: number) => {
        const taskFinded = todoList.find(task => task.id === id)
        if (taskFinded) return taskFinded
        const response = await taskService.getTask(id)
        setTodoList([...todoList, response])
        return response
    }

    const addTaskAction: ITaskStore['addTaskAction'] = async (task: ITask) => {
        const response = await taskService.addTask({ ...task, position: new Date().getTime()})
        setTodoList([ ...todoList, response])
        return response
    }

    const deleteTaskAction: ITaskStore['deleteTaskAction'] = async (id: number) => {
        await taskService.deleteTask(id)
        const taskFiltered = todoList.filter(task => task.id !== id)
        setTodoList(taskFiltered)
        return
    }

    const updateTaskAction: ITaskStore['updateTaskAction'] = async (taskUpdated: ITask) => {
        await taskService.updateTask(taskUpdated)
        setTodoList(todoList.map(task => task.id === taskUpdated.id ? taskUpdated : task))
    }

    const changeTaskPositionAction: ITaskStore['changeTaskPositionAction'] = async (taskA: ITask, taskB: ITask) => {
        const newTaskA = { ...taskA, position: taskB.position }
        const newTaskB = { ...taskB, position: taskA.position }

        const [responseTaskA, responseTaskB] = await Promise.all([
            taskService.updateTask(newTaskA),
            taskService.updateTask(newTaskB)
        ])

        setTodoList(todoList.map(task => {
            if (task.id === newTaskA.id) return newTaskA
            if (task.id === newTaskB.id) return newTaskB
            return task
        }))
    }


    return {
        todoList,
        getTodoListAction,
        getTaskAction,
        addTaskAction,
        deleteTaskAction,
        updateTaskAction,
        changeTaskPositionAction
    }
}
