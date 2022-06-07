import { Notepad, PlusCircle } from 'phosphor-react'
import React from 'react'
import TaskCounter from '../components/TaskCounter'


export default function MainLayout() {

  return (
    <div className='max-w-6xl flex w-full h-screen mx-auto -mt-8 px-8 md:px-32'>
        <main className='w-full items-stretch flex flex-col gap-16'>
          <div className="flex md:h-14 h-full md:order-1 order-2 md:items-start items-end md:pb-0 pb-6"> 
            <form className="flex w-full gap-2 h-14">
              <input className="flex-1 rounded-lg p-4 bg-gray-500 placeholder:text-gray-300" type="text" placeholder="Adicione uma nova tarefa" />
              <button 
                className='w-[90px] rounded-lg bg-secondary-base font-inter font-bold text-gray-100 text-sm flex justify-center items-center gap-2'
                type="submit"
              >
                Criar
                <PlusCircle size={20} weight="bold"/>
              </button>
            </form>
          </div>
          <div className='flex flex-col gap-6 md:order-2 order-1'>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <p className='text-secondary-base font-bold'>Tarefas criadas</p>
                <TaskCounter />
              </div>
              <div className='flex gap-2'>
                <p className='text-primary-base font-bold'>Concluídas</p>
                <TaskCounter tasks={3} />
              </div>
            </div>
            <div className='h-[244px] rounded-lg border-t-[1px] border-solid border-gray-300 flex flex-col items-center justify-center'>
              <Notepad size={56} className="text-gray-400"/>
              <p className='font-bold mt-4 text-gray-300'>Você ainda não tem tarefas cadastradas</p>
              <p className='text-sm text-gray-300'>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </main>
    </div>
  )
}
