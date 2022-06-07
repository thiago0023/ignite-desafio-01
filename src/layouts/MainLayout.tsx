import { Notepad, PlusCircle } from 'phosphor-react'
import React from 'react'
import CreateTaskBar from '../components/CreateTaskBar'
import EmptyTaskBoard from '../components/EmptyTaskBoard'
import TaskArea from '../components/TaskArea'
import TaskCounter from '../components/TaskCounter'


export default function MainLayout() {

  return (
    <div className='max-w-6xl flex w-full h-screen mx-auto -mt-8 px-8 md:px-32'>
      <main className='w-full items-stretch flex flex-col gap-16'>
        <CreateTaskBar />
        <TaskArea />
      </main>
    </div>
  )
}
