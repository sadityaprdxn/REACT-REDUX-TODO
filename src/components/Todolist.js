import React, { useState , useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo , changeStatusTodo, deleteTodo } from '../actions/actions';

const Todolist = ({value, id}) => {
    
    const todo = useSelector(state => state.todoList[`uniqueId${id}`]);
    const dispatch = useDispatch();
    const input = useRef();
    const [isEditing, changeIsEditing] = useState(false);
    const [editedValue , changeEditedvalue] = useState(value);

    const handleOnchange = (e) => { changeEditedvalue(e.target.value); }

    const handleOnsubmit = (e) => {
        e.preventDefault();
        
        changeIsEditing(false);
        dispatch(editTodo(todo, editedValue));
    }

    const checked = (e) => {
        if (e.target.checked) {
            dispatch(changeStatusTodo(todo, 'completed'));
        } else {
            dispatch(changeStatusTodo(todo, 'pending'));
        }
    }

    const editHandler = () => { changeIsEditing(true); }

    const deleteHandler = () => {
        dispatch(deleteTodo(todo));
    }

    useEffect(() => {
        if(isEditing) {
            input.current.focus();
        }
    });

    return (
        <li>
            <input type="checkbox" onChange={checked}/>
            { !isEditing && <h3>{value}</h3>}
            
            { isEditing && (
                <form onSubmit={handleOnsubmit}>
                    <input type="text" ref={input} value={editedValue} onChange={handleOnchange} onBlur={handleOnsubmit}/>
                </form>
            )}
            
            <div className="todo-controllers">
                <span className="edit" onClick={editHandler}></span>
                <span className="delete" onClick={deleteHandler}></span>
            </div>
        </li>
    );
}

export default Todolist;
