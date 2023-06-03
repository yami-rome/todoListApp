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

test('Next button work correctly', async () => {

  let screen: RenderResult

  await act(async () => {
    screen = render(<Wrapper />)
  })

  await waitFor(() => {
    expect(screen.baseElement).toMatchSnapshot()
  })

  await act(async () => {

    const nextButtonList = await screen.findAllByTestId('nextButton')

    const firstNextButton = nextButtonList[0]
    if (firstNextButton) fireEvent.click(firstNextButton)
  })

  await waitFor(() => {
    expect(screen.baseElement).toMatchSnapshot()
  })

})

test('Previus button work correctly', async () => {

  let screen: RenderResult

  await act(async () => {
    screen = render(<Wrapper />)
  })

  await act(async () => {

    const nextButtonList = await screen.findAllByTestId('nextButton')

    const firstNextButton = nextButtonList[0]
    if (firstNextButton) fireEvent.click(firstNextButton)
  })

  await waitFor(() => {
    expect(screen.baseElement).toMatchSnapshot()
  })

  await act(async () => {

    const previusButtonList = await screen.findAllByTestId('previusButton')

    const firstPreviusButton = previusButtonList[0]
    if (firstPreviusButton) fireEvent.click(firstPreviusButton)
  })

  await waitFor(() => {
    expect(screen.baseElement).toMatchSnapshot()
  })
})

