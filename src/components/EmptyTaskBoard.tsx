import { Notepad } from 'phosphor-react'
import React from 'react'

export default function EmptyTaskBoard() {
    return (
        <div className='h-[244px] rounded-lg border-t-[1px] border-solid border-gray-300 flex flex-col items-center justify-center'>
            <Notepad size={56} className="text-gray-400" />
            <p className='font-bold mt-4 text-gray-300'>Você ainda não tem tarefas cadastradas</p>
            <p className='text-sm text-gray-300'>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}
