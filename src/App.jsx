import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App(){
  
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação.",
    description: "Estudar programação para se tornar um desenvolvedor fullstack.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar Matemática.",
    description: "Estudar matemática para enganar a si mesmo pensando que vai passar na prova do MMC.",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar Inglês.",
    description: "Estudar inglês para se colocar dentro do mercado de trabalho.",
    isCompleted: false
  },
])

  return(
    
    <div className="w-screen h-screen bg-blue-300 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-slate-100">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>

  );
}

export default App; 