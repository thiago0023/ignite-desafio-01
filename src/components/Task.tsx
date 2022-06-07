import { Trash } from 'phosphor-react'
import React from 'react'
import { useTasks } from '../hooks/useTasks';

export interface TaskData {
    id: number;
    content: string;
}

interface TaskProps {
    task: TaskData
}

export default function Task({ task }: TaskProps) {
    const { onDeleteTask } = useTasks();

    return (
        <div className='w-full h-[4.5rem] bg-gray-500 flex rounded-lg p-4 gap-4 items-start'>
            <button className='rounded-full border-solid border-2 border-secondary-light w-5 h-5' />
            <p className='flex-1 h-full'>{task.content}</p>
            <button title='Deletar comentário' className='bg-transparent border-0 text-gray-300 cursor-pointer leading-[0] rounded-sm hover:text-danger transition-colors duration-150' onClick={()=> onDeleteTask(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}
