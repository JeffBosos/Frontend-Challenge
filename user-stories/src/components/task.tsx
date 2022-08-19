import React from "react";
import {Typography,Button,Card,IconButton,Box} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {TaskStatus} from '../config/constants';
import useMediaQuery from '@mui/material/useMediaQuery';

interface TaskProps {
    title:string;
    description:string;
    state:TaskStatus;
} 
interface LabelProps {
    state:TaskStatus;
} 
const TASK_COLOR_MAP ={
    [TaskStatus.TODO]:"lightblue",
    [TaskStatus.INQA]:"red",
    [TaskStatus.INPROGRESS]:"green",
    [TaskStatus.BLOCKED]:"Black",
    [TaskStatus.DEPLOYED]:"orange",
    [TaskStatus.DONE]:"purple"
}


const StatusLabel:React.FC<LabelProps>=(props:LabelProps)=>{
    // const state=props.state
    const {state}=props
    const returnColor=(x:number)=>{
        let color 
        switch (x) {
            case TaskStatus.TODO:
                color=TASK_COLOR_MAP[TaskStatus.TODO]
                break;
            case TaskStatus.INQA:
                color=TASK_COLOR_MAP[TaskStatus.INQA]
                break;
            case TaskStatus.INPROGRESS:
                color=TASK_COLOR_MAP[TaskStatus.INPROGRESS]
                break;
            case TaskStatus.BLOCKED:
                color=TASK_COLOR_MAP[TaskStatus.BLOCKED]
                break;
            case TaskStatus.DEPLOYED:
                color=TASK_COLOR_MAP[TaskStatus.DEPLOYED]
                break;
            case TaskStatus.DONE:
                color=TASK_COLOR_MAP[TaskStatus.DONE]
                break;
            default:
                break;
        }
        
        return color
    }
    const backgroundColor = returnColor(state)
    return(
        <Box 
             sx={{
                backgroundColor,
                color:"white",
                borderRadius:1,
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                height:20,
                alignItems:"center",
                padding: "3px 10px"

            }}
        >
            <Typography variant="body1">State {props.state}</Typography>
            
        </Box>
    )
}

const Task:React.FC<TaskProps> = (props : TaskProps) => {
    const isDesktopScreen = useMediaQuery((theme:any) => theme.breakpoints.up('sm'));
    return (
        <Card 
            elevation={5}
            sx={{
                height: isDesktopScreen ? "30vh" : 200,
                borderRadius:3,
                padding: 2,
                paddingBottom:1,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                minHeight:200
            }} 
        >
            <div>
                <Typography variant="h2">{props.title}</Typography>
                <Typography variant="subtitle1" sx={{ marginTop:2}}>{props.description}</Typography>
            </div>
            <Box 
            sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <StatusLabel state={props.state}/>
                <IconButton aria-label="edit"><BorderColorIcon fontSize="medium"/></IconButton>
            </Box>
            
        </Card>
    )
}

export default Task