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

test('Filter of Select favorite: all, favorites and not favorites', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectFavorite'), {
            target:
            {
                value: 'all'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectFavorite'), {
            target:
            {
                value: 'favorites'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectFavorite'), {
            target:
            {
                value: 'not favorites'
            }
        })
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })


})

test('Filter of Select status: all, pending, progress o success', async () => {

    let screen: RenderResult

    await act(() => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterSelectStatus'), {
            target:
            {
                value: 'all'
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

test('Search input: The list should show the filtered task', async () => {

    let screen: RenderResult

    await act(async () => {
        screen = render(<Wrapper />)
    })

    await waitFor(() => {
        expect(screen.baseElement).toMatchSnapshot()
    })

    await act(async () => {
        fireEvent.change(screen.getByTestId('filterInput'), {
            target: {
                value: 'magnus'
            }
        })
    })
})