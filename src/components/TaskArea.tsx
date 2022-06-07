import React from 'react'
import { useTasks } from '../hooks/useTasks';
import EmptyTaskBoard from './EmptyTaskBoard'
import { TaskData } from './Task';
import TaskCounter from './TaskCounter'
import TaskList from './TaskList';

export default function TaskArea() {

    const { tasks } = useTasks();


    const isTaskListEmpty = tasks.length === 0;
    const taskCount = tasks.length;

    return (
        <div className='flex flex-col gap-6 md:order-2 order-1'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <p className='text-secondary-base font-bold'>Tarefas criadas</p>
                    <TaskCounter tasks={taskCount}/>
                </div>
                <div className='flex gap-2'>
                    <p className='text-primary-base font-bold'>Concluídas</p>
                    <TaskCounter tasks={0} />
                </div>
            </div>
            {isTaskListEmpty 
            ? <EmptyTaskBoard />:
            <TaskList tasks={tasks}/>}
        </div>
    )
}
