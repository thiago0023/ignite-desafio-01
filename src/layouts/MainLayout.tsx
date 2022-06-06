import { Notepad, PlusCircle } from 'phosphor-react'
import React from 'react'


export default function MainLayout() {

  return (
        <main className='max-w-6xl mx-auto -mt-8 py-0 md:px-32 px-8 grid gap-16 items-start grid-cols-1'>
          <form className="flex gap-2 h-14">
            <input className="flex-1 rounded-lg p-4 bg-gray-500 placeholder:text-gray-300" type="text" placeholder="Adicione uma nova tarefa" />
            <button 
              className='w-[90px] rounded-lg bg-secondary-base font-inter font-bold text-gray-100 text-sm flex justify-center items-center gap-2'
              type="submit"
            >
              Criar
              <PlusCircle size={20} weight="bold"/>
            </button>
          </form>
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between'>
              <p className='text-secondary-base font-bold'>Tarefas criadas</p>
              <p className='text-primary-base font-bold'>Concluídas</p>
            </div>
            <div className='h-[244px] rounded-lg border-t-[1px] border-solid border-gray-300 flex flex-col items-center justify-center'>
              <Notepad size={56} className="text-gray-400"/>
              <p className='font-bold mt-4 text-gray-300'>Você ainda não tem tarefas cadastradas</p>
              <p className='text-sm text-gray-300'>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </main>
  )
}
