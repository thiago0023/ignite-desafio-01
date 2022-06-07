import React from 'react'

interface TaskCounterProps {
    tasks?: number
}

export default function TaskCounter({ tasks = 0 }: TaskCounterProps) {
    return (
        <span className='bg-gray-400 text-gray-200 w-8 flex justify-center items-center rounded-full text-xs font-bold'>
            {tasks}
        </span>
    )
}
