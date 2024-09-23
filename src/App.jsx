
import './App.css'
import CreateText from './components/CreateText'
import TextLists from './components/TextLists'

function App() {

  return (
    <>
      <section className='bg-slate-300 p-5 min-h-full w-[80%] mx-auto'>

        <h1 className='text-2xl mx-auto w-full text-center h-auto py-7 bg-slate-600 mb-4'>To Do Lists</h1>
        <CreateText />
        <TextLists />



      </section>


    </>
  )
}

export default App
