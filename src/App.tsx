import Header from './components/Header'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
      <div className='font-inter text-gray-300 h-screen w-screen bg-gray-600 antialiased pb-4 leading-[140%]'>
        <Header />
        <MainLayout />
      </div>
  )
}

export default App
