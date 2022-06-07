import React from 'react'
import Task, { TaskData } from './Task'

interface TaskListProps {
    tasks: TaskData[]
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className='w-full flex flex-col gap-2 overflow-hidden'>
        {tasks.map((task, index) => (
            <Task key={index} task={task} />
        ))}
    </div>
  )
}
