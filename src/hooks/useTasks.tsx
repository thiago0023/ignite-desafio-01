import React from 'react'
import { TaskData } from '../components/Task';

interface TaskContextData {
    tasks: TaskData[];
    onDeleteTask: (taskID: number | string) => void;
    onCreateTask: (task: TaskData) => void;
}

interface TaskProviderProps {
    children: React.ReactNode;
}

export default function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = React.useState<TaskData[]>([]);

    const onDeleteTask = (taskID: number | string): void => {
        const newTasks = tasks.filter(task => task.id != taskID);
        setTasks([...newTasks]);
    }

    const onCreateTask = (newTask: TaskData): void => {
        setTasks([...tasks, newTask]);
    }

    return (
        <TaskContext.Provider value={{tasks, onCreateTask, onDeleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}

const TaskContext = React.createContext<TaskContextData>(null as any);
export const useTasks = () => React.useContext(TaskContext);

