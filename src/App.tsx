import Header from './components/Header'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
      <div className='font-inter text-gray-300 h-screen w-screen flex flex-col justify-center bg-gray-600 antialiased '>
        <Header />
        <MainLayout />
      </div>
  )
}

export default App
