import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 rounded-md capitalize`,
    liCompleted: `flex justify-between bg-slate-200 p-4 my-2 rounded-md capitalize line-through`,
    row: `flex`,
    text: `text-slate-900 cursor-pointer`,
    textCompleted: `text-slate-900 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo }) => {
    return (
        <li className={style.li}>
            <div className={style.row}>
                <input type="checkbox" />
                <p className={style.text}>{todo}</p>
            </div>
            <button>
                <FaRegTrashAlt />
            </button>
        </li>
    )
}

export default Todo
