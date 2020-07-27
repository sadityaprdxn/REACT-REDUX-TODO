import React, { useState , useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions/actions';
import Todolist from './Todolist';


let uniqueId = 1;

const Todo = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [value , changevalue] = useState("");

    const handleValue = (e) => { changevalue(e.target.value); }

    const addNewTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(value , uniqueId));
        uniqueId += 1 ;
        changevalue("");
    }

    return (
        <section className="todo">
            <div className="wrapper">
                <div className="todo-container">
                    <form className="todo-topsection" onSubmit={addNewTodo}>
                        <h2>add your todos over here</h2>
                        <input type="text" placeholder="ADD TODOS HERE" value={value} onChange={handleValue}/>
                    </form>
                    <ul>
                    {
                        state.todoFilter !== 'all' ? (
                            Object.entries(state.todoList).map(([key, {value, id , status, isEditing}]) => {
                                if( status === state.todoFilter) {
                                    return <Todolist 
                                            value = {value}
                                            key = {id}
                                            id = {id}
                                            />
                                }
                            })
                        ) : (
                            Object.entries(state.todoList).map(([key, {value, id, isEditing}]) => {
                                return <Todolist 
                                        value = {value}
                                        key = {id}
                                        id = {id}
                                        />
                            })
                        )
                    }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Todo;
