import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { ITask } from "../../store/task/task.model.store"
import { useTaskStore } from "../../store/task/task.use.store"
import { TodoListPage } from "./todoList.page"
import mockResponse from "../../store/task/response.mock"
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

test('The maximized button should show all information of the task', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('maximizedButtonCard-13'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })
})

test('The minimized button should not show all information of the task', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('maximizedButtonCard-13'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('minimizedButtonCard-13'))
    })


    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()

    })

})

test('Favorite button: should bookmark a task', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {

        const favoriteTaskList = await screen.findAllByTestId('favoriteButtonCard')

        const firstFavoriteTask = favoriteTaskList[0]
        fireEvent.click(firstFavoriteTask)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

test('Button Edit: should edit a task', async () => {

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

    await act(() => {
        const inputTitle = screen.getByTestId('inputTitleForm')
        fireEvent.change(inputTitle, { target: { value: 'title updated' } })

        const inputDescription = screen.getByTestId('inputDescriptionForm')
        fireEvent.change(inputDescription, { target: { value: 'description updated' } })

        const selectStatus = screen.getByTestId('inputDescriptionForm')
        fireEvent.change(selectStatus, { target: { value: 'success' } })
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

test('Select: The Progress option should not show pending and success tasks', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {

        const statusList = await screen.findAllByTestId('selectStatusCard')

        const firstStatusTask = statusList[0]


        fireEvent.change(firstStatusTask), {
            target: {
                value: 'progress'
            }
        }
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()

    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'success'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'pending'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

test('Select: The Success option should not show pending and progress tasks', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()

    })

    await act(async () => {

        const statusList = await screen.findAllByTestId('selectStatusCard')

        const firstStatusTask = statusList[0]

        fireEvent.change(firstStatusTask), {
            target: {
                value: 'success'
            }
        }
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })



    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'pending'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()


    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'progress'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()

    })

})

test('Select: The Pending option should not show success and progress tasks', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {

        const statusList = await screen.findAllByTestId('selectStatusCard')

        const firstStatusTask = statusList[0]

        fireEvent.change(firstStatusTask), {
            target: {
                value: 'pending'
            }
        }
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })



    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'progress'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'success'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })
})

test('Delete button: confirm before deleting', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {

        const deleteButtonList = await screen.findAllByTestId('deleteButtonCard')

        const firstDeleteButton = deleteButtonList[0]
        if (firstDeleteButton) fireEvent.click(firstDeleteButton)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.click(screen.getByTestId('confirmModalButton'))
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

test('Up button: move a card up', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


    await act(async () => {

        const moveTaskList = await screen.findAllByTestId('upButtonCard')

        const firstMoveTask = moveTaskList[1]
        fireEvent.click(firstMoveTask)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

test('Down button: move a card down', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {

        const moveTaskList = await screen.findAllByTestId('downButtonCard')

        const firstMoveTask = moveTaskList[0]
        fireEvent.click(firstMoveTask)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

})

