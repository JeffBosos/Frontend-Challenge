import { TaskStatus } from "../config/constants"
export type Task = {
    title:string
    state:TaskStatus
    description:string
}