import './App.css'
import { TodoListPage } from './pages/TodoList/todoList.page'
import { useAppStore } from './store/app/app.use.store'
import { useTaskStore } from './store/task/task.use.store'

function App() {
  const taskStore = useTaskStore()
  const appStore = useAppStore()
  

  return (
    <TodoListPage
      taskStore={taskStore}
      appStore={appStore}
    />
  )
}

export default App
