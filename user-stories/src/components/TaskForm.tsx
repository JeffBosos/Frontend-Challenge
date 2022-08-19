import { Card,IconButton,Typography,Box,Button, ThemeProvider,FormLabel, FilledInput} from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import theme from "../styles/SecondPageTheme"
import { Task } from "../types/task";
import { TaskStatus } from "../config/constants";


interface TaskFormProps{
    visible?:boolean
    onAdd:(newTask:Task)=>void
}

const TaskForm = ({visible,onAdd}:TaskFormProps)=>{
    const [description, setDescription] = useState('');
    const [title,setTitle]=useState('');
    const handleChangeDescription=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(event.target.value);
    };
    const createNewTask=():Task=>{
        const object:Task={
            title:title,
            state:TaskStatus.TODO,
            description:description
        }
        return object
        
    }
    const handleChangeTitle=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value);
    };
    const buttonManager=()=>{
        const newTask:Task = createNewTask()
        onAdd(newTask)
        setTitle('')
        setDescription('')
    }
    if(!visible){
        return null
    }
    return(
            <ThemeProvider theme={theme}>
                <Card sx={{
                    height:600,
                    width:500
                }}>
                    <Box 
                        component="form" 
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            '& > :not(style)': { m: 1 },
                            borderRadius:3,
                            padding: 2,
                            paddingBottom:1,
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"space-between",
                            minHeight:200
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <Button color="error"><CloseIcon aria-label="edit"><BorderColorIcon fontSize="medium"/></CloseIcon></Button>
                            <Typography
                                 
                                variant="h3"
                                sx={{
                                color:"white", 
                                backgroundColor:"lightblue",
                                height:60,
                             }}
                            >
                                Task management {'>'} Home 
                            </Typography>
                            <Typography  variant="h2">Add a new Task</Typography>
                            <TextField
                                onChange={handleChangeTitle}    
                                value={title}
                                placeholder="Title"
                                variant="filled" style={{width:450}} 
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                minRows={10}
                                maxRows={10}
                                value={description}
                                onChange={handleChangeDescription}
                                variant="filled"
                                style={{width:450}}
                            />
                            <Button
                                disabled={title.length==0||description.length==0}
                                onClick={buttonManager} 
                                sx={{
                                    backgroundColor:"lightblue",
                                    color:"white",
                                    height:60
                                }}
                            >
                                <AddIcon/>
                            </Button>
                    </Box>
                </Card>
            </ThemeProvider>
    )
}

export default TaskForm