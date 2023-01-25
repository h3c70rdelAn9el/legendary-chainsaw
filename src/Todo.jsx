import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 rounded-md capitalize`,
    liCompleted: `flex justify-between bg-slate-200 p-4 my-2 rounded-md capitalize line-through`,
    row: `flex`,
    text: `text-slate-900 cursor-pointer ml-2`,
    textCompleted: `text-slate-900 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo, toggleCompleted, deleteTodo }) => {
    return (
        <li className={todo.completed ? style.liCompleted : style.li}>
            <div className={style.row}>
                <input
                    onChange={() => toggleCompleted(todo)}
                    type="checkbox"
                    checked={todo.completed ? 'checked' : ''}
                />
                <p
                    onClick={() => toggleCompleted(todo.id)}
                    className={
                        todo.completed ? style.textCompleted : style.text
                    }>
                    {todo.text}
                </p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>
                <FaRegTrashAlt />
            </button>
        </li>
    )
}

export default Todo
