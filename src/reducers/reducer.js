const initialState = {
    todoList : {},
    todoFilter : 'all'
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList : {
                    ...state.todoList,
                    [`uniqueId${action.payLoad.id}`] : action.payLoad
                }
            }

        case 'EDIT_TODO':
            return {
                ...state,
                todoList : {
                    ...state.todoList,
                    [`uniqueId${action.payLoad.id}`] : action.payLoad
                }
            }

        case 'CHANGE_STATUS_TODO':
            return {
                ...state,
                todoList : {
                    ...state.todoList,
                    [`uniqueId${action.payLoad.id}`] : action.payLoad
                }
            }

        case 'DELETE_TODO':
            let todoList = state.todoList;
            delete todoList[`uniqueId${action.payLoad.id}`]
            return {
                ...state,
                todoList : todoList
            }
    
        default:
            return state;
    }
}

export default todoListReducer;