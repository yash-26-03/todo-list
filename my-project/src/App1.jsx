import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
 

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    const target = todos.find(i => i.id === id)
    if (!target) return
    setTodo(target.todo)
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS();
  }

  const handleDelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS();
  }

  const handleAdd = () => {
    if (!todo.trim()) return
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('')
    saveToLS();
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }


  return (
    <>
      <Navbar />
      <div className='bg-violet-100 min-h-[80vh] rounded-xl p-5 my-5 mx-5 md:container md:mx-auto md:w-[42%]'>
        <h1 className='font-bold text-center text-3xl font-serif'>iTask - Manage your task at one place</h1>
        <div className='addtodo my-5 flex flex-col gap-4' >
          <h2 className='text-2xl'>Add a Todo</h2>

          <div className='flex'>
            <input onChange={handleChange} value={todo} type="text" placeholder="Enter a new todo..." className='w-full rounded-xl px-5 py-1 border-black-1 bg-white' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-pink-400 mx-2 rounded-xl p-4 py-2 text-sm font-bold text-white hover:bg-pink-600 disabled:bg-red-500'>Save</button>
          </div>
        </div>


        <input type="checkbox" id="show" onChange={toggleFinished} my-5 checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>

        <div className='h-px bg-black opacity-20 w-90% mx-auto my-2'></div>

        <h2 className='text-xl font-bold text-pink-500'>YOUR TODOS</h2>

        <div className='todos'>
          {todos.length === 0 && <div>No Todos To display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className={'todo flex my-3 justify-between'}>
              <div className='flex gap-5'>
                <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-pink-400 hover:bg-pink-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e) => handleDelete(e, item.id)} className='bg-pink-400 hover:bg-pink-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
