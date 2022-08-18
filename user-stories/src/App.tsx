import mockTasks from "./mocks/tasks.json"
import React, { useState } from "react";
import {Button, ThemeProvider} from "@mui/material"
import theme from "./styles/theme"
import Tasklist from './components/tasklist'
import Createtask from "./components/createtask";


const App: React.FC = () => {
  const [isvisible, setIsvisible] = useState(false);
  const [tasks,setTasks]=useState([
    ...mockTasks,
    ...mockTasks,
    ...mockTasks,
  ]);
  const onClickCreateTask=()=>{
    setIsvisible(true)
  }
  return (
    <ThemeProvider theme={theme}>
      <Createtask visible={isvisible}/>
      <Button onClick={onClickCreateTask}>Add Task</Button>
      <Tasklist tasks={tasks}/> 
    </ThemeProvider>
  );
}

export default App;
