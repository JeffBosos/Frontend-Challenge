import mockTasks from './mocks/tasks.json'
import React, { useState } from 'react'
import { Button, ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import Tasklist from './components/tasklist'
import TaskForm from './components/TaskForm'
import { Task } from './types/task'

const App: React.FC = () => {
  const [isvisible, setIsvisible] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([...mockTasks])
  const addTask = (newTask: Task): void => {
    const newState: Task[] = [...tasks, newTask]
    setTasks(newState)
  }
  const onClickCreateTask = (): void => {
    setIsvisible(true)
  }
  return (
    <ThemeProvider theme={theme}>
      <TaskForm visible={isvisible} onAdd={addTask} />
      <Button onClick={onClickCreateTask}>Add Task</Button>
      <Tasklist tasks={tasks} />
    </ThemeProvider>
  )
}

export default App
