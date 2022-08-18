import tasks from "./mocks/tasks.json"
import React from "react";
import {ThemeProvider} from "@mui/material"
import theme from "./styles/theme"
import Tasklist from './components/tasklist'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Tasklist tasks={tasks}/> 
    </ThemeProvider>
  );
}

export default App;
