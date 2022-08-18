import React from "react"
import {Typography,Button,Card,IconButton,Box} from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Directions } from "@mui/icons-material";

interface TaskProps {
    title:string;
    description:string;
    state:string;
} 
interface LabelProps {
    state:string;
} 

const StatusLabel:React.FC<LabelProps>=(props:LabelProps)=>{
    const returnColor=()=>{
        return "red"
    }
    console.log(returnColor())
    return(
        <Box 
             sx={{
                backgroundColor: "lightblue",
                color:"white"
            }}
        >
            State {props.state}
        </Box>
    )
}

const Task:React.FC<TaskProps> = (props : TaskProps) => {
    return (
        <Card 
            elevation={5}
            sx={{
                maxWidth:370,
                margin:5,
                height:400,
                borderRadius:3,
                padding:3,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }} 
        >
            <Typography variant="h2">Title {props.description}</Typography>
            <Typography variant="subtitle1">Description {props.title}</Typography>
            <Box 
            sx={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <StatusLabel state="toDo"/>
                <IconButton aria-label="edit"><BorderColorIcon/></IconButton>
            </Box>
            
        </Card>
    )
}

export default Task