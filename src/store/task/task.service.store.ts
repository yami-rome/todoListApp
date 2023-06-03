import axios from "axios"
import { ITask } from "./task.model.store"

interface ITaskService {
    getTask: (id: number) => Promise<ITask>
    getTodoList: () => Promise<Array<ITask>>
    addTask: (task: ITask) => Promise<ITask>
    updateTask: (taskUpdated: ITask) => Promise<void>
    deleteTask: (id: number) => Promise<void>
}

type TGetTodoListResponse = Array<ITask>

interface IGetTaskResponse extends ITask { }

export const useTaskService = (): ITaskService => {

    let apiURL = 'http://localhost:3000/todoList'

    const getTodoList: ITaskService['getTodoList'] = async () => {
        try {
            const response = await axios.get<TGetTodoListResponse>(`${apiURL}`)
            return response.data.map(task => ({
                "id": task.id,
                "title": task.title,
                "description": task.description,
                "position": task.position,
                "isFavorite": task.isFavorite,
                "status": task.status
            }))
        } catch (error) {
            document.dispatchEvent(new CustomEvent('serverError'))
            return []
        }
    }

    const getTask: ITaskService['getTask'] = async (id: number) => {
        try {
            const response = await axios.get<IGetTaskResponse>(`${apiURL}/${id}`)
            return {
                "id": response.data.id,
                "title": response.data.title,
                "description": response.data.description,
                "position": response.data.position,
                "isFavorite": response.data.isFavorite,
                "status": response.data.status
            }
        } catch (error) {
            document.dispatchEvent(new CustomEvent('serverError'))
            return Promise.reject(error)
        }
    }

    const deleteTask: ITaskService['deleteTask'] = async (id: number) => {
        try {
            await axios.delete<void>(`${apiURL}/${id}`)
            return
        } catch (error) {
            document.dispatchEvent(new CustomEvent('serverError'))
        }
    }

    const addTask: ITaskService['addTask'] = async (task: ITask) => {
        try {
            const response = await axios.post<ITask>(`${apiURL}`, task)
            return response.data
        } catch (error) {
            document.dispatchEvent(new CustomEvent('serverError'))
            return Promise.reject(error)
        }
    }

    const updateTask: ITaskService['updateTask'] = async (taskUpdated: ITask) => {
        try {
            const response = await axios.put<void>(`${apiURL}/${taskUpdated.id}`, taskUpdated)
            return response.data
        } catch (error) {
            document.dispatchEvent(new CustomEvent('serverError'))
        }
    }

    return {
        getTodoList,
        getTask,
        deleteTask,
        addTask,
        updateTask,
    }
}





