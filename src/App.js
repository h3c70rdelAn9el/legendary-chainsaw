import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './Todo'
import { db } from './firebase'
import {
    collection,
    query,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
} from 'firebase/firestore'

const style = {
    bg: `h-screen w-full bg-gradient-to-br from-gray-400 to to-blue-800`,
    container: `bg-slate-400 max-w-[500px] mx-auto rounded-md shadow-md p-4`,
    heading: `text-2xl text-center text-gray-800`,
    form: `flex justify-between items-center mt-4`,
    input: `rounded-md border p-2 w-full`,
    button: `border p-4 ml-2 rounded-md bg-blue-500 text-white hover:bg-blue-600`,
    count: `text-center text-gray-800`,
}

function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    // add todo
    const addTodo = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid todo')
            return
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false,
        })
        setInput('')
    }

    // get todos
    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = []
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id })
            })
            setTodos(todosArr)
        })
        return unsubscribe
    }, [])

    // update todo
    const toggleCompleted = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed,
        })
    }

    // delete todo
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h2 className={style.heading}>Todo</h2>
                <form onSubmit={addTodo} className={style.form}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={style.input}
                        type="text"
                        placeholder="Add a todo"
                    />
                    <button className={style.button} type="submit">
                        <AiOutlinePlus />
                    </button>
                </form>

                <ul>
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            toggleCompleted={toggleCompleted}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                    {/* <Todo /> */}
                </ul>

                {todos.length === 0 ? null : (
                    <p className={style.count}>
                        {`Total todos: ${todos.length}`}
                    </p>
                )}
            </div>
        </div>
    )
}
export default App
