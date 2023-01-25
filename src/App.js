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

// create todo
// read todo

// update todo

// read todo

function App() {
    const [todos, setTodos] = useState([])

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

    const toggleCompleted = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed,
        })
    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h2 className={style.heading}>Todo</h2>
                <form className={style.form}>
                    <input
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
                        />
                    ))}
                    {/* <Todo /> */}
                </ul>
                <p className={style.count}>You have two todos</p>
            </div>
        </div>
    )
}

export default App
