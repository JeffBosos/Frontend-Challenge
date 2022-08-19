import TaskCard from "./task";
import {TaskStatus} from '../config/constants'
import React from "react";
import {Grid} from "@mui/material"
import {Task} from "../types/task"

interface Tasklistprops{
    tasks:Array<Task>
}
 const taskList:React.FC<Tasklistprops> =({tasks}:Tasklistprops)=>{
    const itemsMapped: Array<JSX.Element> = tasks.map((task:Task)=> (
        <Grid item md={3} xs={6}>
            <TaskCard title={task.title} description={task.description} state={task.state}/>
        </Grid>
      ))
    
    return(
        
        <Grid container spacing={4} sx={{
            padding:2
        }}>
            {itemsMapped}
        </Grid>
    )
}



export default taskList