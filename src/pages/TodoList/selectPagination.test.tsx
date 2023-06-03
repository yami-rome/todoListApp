import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useAppStore } from "../../store/app/app.use.store"
import { useTaskStore } from "../../store/task/task.use.store"
import { TodoListPage } from "./todoList.page"

const Wrapper = () => {
  const taskStore = useTaskStore()
  const appStore = useAppStore()

  return <TodoListPage taskStore={taskStore} appStore={appStore} />
}


test('Select pagination: It must show the pagination according to the number of selected tasks: 2,3,6 o 9 ',
  async () => {

    let screen: RenderResult

    await act(() => {
      screen = render(<Wrapper />)
    })

    await waitFor(() => {
      expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {
      fireEvent.change(screen.getByTestId('selectPagination'), {
        target:
        {
          value: '2'
        }
      })
    })

    await waitFor(() => {
      expect(screen.baseElement).toMatchSnapshot()

    })

    await act(async () => {
      fireEvent.change(screen.getByTestId('selectPagination'), {
        target:
        {
          value: '3'
        }
      })
    })

    await waitFor(() => {
      expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
      fireEvent.change(screen.getByTestId('selectPagination'), {
        target:
        {
          value: '6'
        }
      })
    })

    await waitFor(() => {
      expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
      fireEvent.change(screen.getByTestId('selectPagination'), {
        target:
        {
          value: '9'
        }
      })
    })

    await waitFor(() => {
      expect(screen.baseElement).toMatchSnapshot()
    })
  })