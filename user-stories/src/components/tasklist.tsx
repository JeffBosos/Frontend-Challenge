import TaskCard from "./task";
import {TaskStatus} from '../config/constants'
import React from "react";
import {Typography,Button,Card,IconButton,Box,Grid} from "@mui/material"

interface Task {
    title:string
    state:TaskStatus
    description:string
}
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