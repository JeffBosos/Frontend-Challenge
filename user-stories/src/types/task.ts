import { TaskStatus } from '../config/constants'
export interface Task {
  title: string
  state: TaskStatus
  description: string
}
