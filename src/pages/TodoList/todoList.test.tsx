import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import mockResponse from "../../store/task/response.mock"
import { useTaskStore } from "../../store/task/task.use.store"
import { ITask } from "../../store/task/task.model.store"
import { TodoListPage } from "./todoList.page"
import { useAppStore } from "../../store/app/app.use.store"

jest.mock('axios', () => ({
  get: async () => ({ data: mockResponse }),
  delete: async (id: 1) => { },
  put: async (url: string, task: ITask) => task,
  post: async (url: string, newTask: ITask) => ({
    data: {
      ...newTask,
      id: 90
    }
  })
}))

const Wrapper = () => {
  const taskStore = useTaskStore()
  const appStore = useAppStore()

  return <TodoListPage taskStore={taskStore} appStore={appStore} />
}


test('Render <TodoListPage/>', async () => {

  await act(async () => { render(<Wrapper />) })

})


























