import { ITask } from "../../store/task/task.model.store"

export interface IFilterStates {
    searchTask: string
    isFavoriteTaskFilterValue: 'all' | 'favorites' | 'not favorites'
    statusFilterValue: 'all' | 'pending' | 'progress' | 'success'
}


export const todoListSearchFilterHelper = (todoList: ITask[], filterState: IFilterStates) => {
    const { searchTask, isFavoriteTaskFilterValue, statusFilterValue } = filterState

    return todoList.filter(task => {
        if (searchTask === '') return true
        if (searchTask && task.title.toUpperCase().includes(searchTask.toUpperCase())) return true
        return false
    })
        .filter(task => {
            if (isFavoriteTaskFilterValue === "all") return true
            if (isFavoriteTaskFilterValue === 'favorites' && task.isFavorite === true) return true
            if (isFavoriteTaskFilterValue === 'not favorites' && task.isFavorite === false) return true
            return false
        })
        .filter(task => {
            if (statusFilterValue === "all") return true
            if (statusFilterValue === "pending" && task.status === "pending") return true
            if (statusFilterValue === "progress" && task.status === "progress") return true
            if (statusFilterValue === "success" && task.status === "success") return true
            return false
        })
}


