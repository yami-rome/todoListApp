import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useTaskStore } from "../../store/task/task.use.store"
import { TodoListPage } from "./todoList.page"
import mockResponse from "../../store/task/response.mock"
import { ITask } from "../../store/task/task.model.store"
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
    
    return <TodoListPage taskStore={taskStore} appStore={appStore}/>
}

test('The add button should create a new task', async () => {

    let screen: RenderResult

    await act(async () => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('addTaskButton'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(() => {
        const inputTitle = screen.getByTestId('inputTitleForm')
        fireEvent.change(inputTitle, { target: { value: '123' } })

        const inputDescription = screen.getByTestId('inputDescriptionForm')
        fireEvent.change(inputDescription, { target: { value: '456' } })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(() => {
        fireEvent.click(screen.getByTestId('createNewTaskButtonForm'))
    })


    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

test('The reset button should reset the title and description fields of the form', async () => {

    let screen: RenderResult

    await act(async () => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('addTaskButton'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {
        fireEvent.click(screen.getByTestId('resetButtonForm'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })
})


test('The cancel button should close the modal', async () => {
    let screen: RenderResult

    await act(async () => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {

        const editList = await screen.findAllByTestId('editButtonCard')

        const firstEditTask = editList[0]

        await act(async () => {
            fireEvent.click(firstEditTask)
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {
        fireEvent.click(screen.getByTestId('cancelButtonForm'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })
})

test('The close button should close the modal', async () => {
    let screen: RenderResult

    await act(async () => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('addTaskButton'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {
        fireEvent.click(screen.getByTestId('modalCloseButton'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })
})