import { ITask } from "./task.model.store";

export interface ITaskStore {
    todoList: Array<ITask>
    getTodoListAction: () => Promise<Array<ITask>>
    getTaskAction: (id: number) => Promise<ITask>
    addTaskAction: (task: ITask) => Promise<ITask>
    updateTaskAction: (taskUpdated: ITask) => Promise<void>
    deleteTaskAction: (id: number) => Promise<void>
    changeTaskPositionAction: (taskA: ITask, taskB: ITask) => Promise<void>
}

export type TUseTaskStore  = () => ITaskStore