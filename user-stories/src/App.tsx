import TaskCard from "./components/task";
import tasks from "./mocks/tasks.json"
import React from "react";
import {ThemeProvider} from "@mui/material"
import theme from "./styles/theme"

interface Task {
  title:string
  state:string
  description:string
}

const App: React.FC = () => {

  const itemsMapped: Array<JSX.Element> = tasks.map((task:Task)=> (
    <TaskCard title={task.title} description={task.description} state={task.state}/>
  ))

  return (
    <ThemeProvider theme={theme}>
      {itemsMapped}  
    </ThemeProvider>
  );
}

export default App;
