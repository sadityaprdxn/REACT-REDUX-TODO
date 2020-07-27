const addTodo = (newTodo , id) => {
    return {
        type : 'ADD_TODO',
        payLoad : {
            value : newTodo,
            status : 'pending',
            id
        }
    }
}

const editTodo = (todo, newValue) => {
    return {
        type : 'EDIT_TODO',
        payLoad : {
            ...todo,
            value : newValue

        }
    }
}

const changeStatusTodo = (todo, status) => {
    return {
        type : 'CHANGE_STATUS_TODO',
        payLoad : {
            ...todo,
            status
        }
    }
}

const deleteTodo = (todo) => {
    return {
        type : 'DELETE_TODO',
        payLoad : todo
    }
}

export {addTodo, editTodo, changeStatusTodo, deleteTodo} ;