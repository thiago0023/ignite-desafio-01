import { PlusCircle } from 'phosphor-react'
import React, { FormEvent, useState } from 'react'
import { useTasks } from '../hooks/useTasks';

export default function CreateTaskBar() {
    const [newTask, setNewTask] = useState<string>('');

    const { onCreateTask } = useTasks();

    const handleSubmitNewTask = (event: FormEvent) => {
        event.preventDefault();

        const newTaskData = {
            id: new Date().getTime(),
            content: newTask
        }

        onCreateTask(newTaskData);
        setNewTask('');
    }

    return (
        <div className="flex md:h-14 h-full md:order-1 order-2 md:items-start items-end md:pb-0 pb-6">
            <form className="flex w-full gap-2 h-14" onSubmit={handleSubmitNewTask}>
                <input className="flex-1 rounded-lg p-4 bg-gray-500 placeholder:text-gray-300" type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={event=> setNewTask(event.target.value)}/>
                <button
                    className='w-[90px] rounded-lg bg-secondary-base font-inter font-bold text-gray-100 text-sm flex justify-center items-center gap-2'
                    type="submit"
                >
                    Criar
                    <PlusCircle size={20} weight="bold" />
                </button>
            </form>
        </div>
    )
}
