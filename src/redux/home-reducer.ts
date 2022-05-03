export type TodoType = {
    id: string,
    isEdit: boolean,
    isComplete: boolean,
    text: string,
}
export type InitStateType = {
    todos: Array<TodoType>,
    inputText: string,
    inputState: boolean,
    filter: "all" | "current" | "completed",
    editText: string,
}

type OnTextChangeActionType = {
    type: typeof TEXT_CHANGE,
    text: string
}
type OnAddTodoActionType = {
    type: typeof ADD_TODO,
}
type OnToggleInputStateActionType = {
    type: typeof TOGGLE_INPUT_STATE,
}
type OnToggleTodoCompleteActionType = {
    type: typeof TOGGLE_TODO_COMPLETE,
    id: string,
}
type DeleteTodoActionType = {
    type: typeof DELETE_TODO,
    id: string,
}
type SetFilterActionType = {
    type: typeof SET_FILTER,
    value: string,
}
type OnEditTextActionType = {
    type: typeof EDIT_TEXT_CHANGE,
    text: string,
}
type OnEditTodoActionType = {
    type: typeof EDIT_TODO,
    id: string,
}
type OnSetEditActionType = {
    type: typeof SET_EDIT,
    id: string,
}
type CancelEditActionType = {
    type: typeof CANCEL_EDIT,
}

const TEXT_CHANGE = "TEXT_CHANGE";
const ADD_TODO = "ADD_TODO";
const TOGGLE_INPUT_STATE = "TOGGLE_INPUT_STATE";
const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";
const DELETE_TODO = "DELETE_TODO";
const SET_FILTER = "SET_FILTER";
const EDIT_TEXT_CHANGE = "EDIT_TEXT_CHANGE";
const EDIT_TODO = "EDIT_TODO";
const SET_EDIT = "SET_EDIT";
const CANCEL_EDIT = "CANCEL_EDIT";


let initState: InitStateType = {
    todos: (localStorage["redux-store"]) ? JSON.parse(localStorage["redux-store"]) : [],
    inputText: "",
    inputState: false,
    filter: "all",
    editText: "",
};

let homeReducer = (state = initState, action: any):InitStateType => {
    switch (action.type){
        case TEXT_CHANGE:{
            return {
                ...state,
                inputText: action.text
            }
        }
        case ADD_TODO:{
            localStorage["redux-store"] = JSON.stringify([...state.todos, {id: state.todos.length + state.inputText, isComplete: false, text: state.inputText, isEdit: false}])
            return {
                ...state,
                todos: [...state.todos, {id: state.todos.length + state.inputText, isComplete: false, text: state.inputText, isEdit: false}]
            }
        }
        case TOGGLE_INPUT_STATE:{
            return {
                ...state,
                inputState: !state.inputState,
            }
        }
        case TOGGLE_TODO_COMPLETE:{
            localStorage["redux-store"] = JSON.stringify(state.todos.map((el) => {
                if (action.id === el.id) return {
                    ...el,
                    isComplete: !el.isComplete,
                }
                return el;
            }));
            return{
                ...state,
                todos: state.todos.map((el) => {
                    if (action.id === el.id) return {
                        ...el,
                        isComplete: !el.isComplete,
                    }
                    return el;
                })
            }
        }
        case DELETE_TODO:{
            localStorage["redux-store"] = JSON.stringify(state.todos.filter((el) => action.id != el.id))
            return{
                ...state,
                todos: state.todos.filter((el) => action.id != el.id),
            }
        }
        case SET_FILTER:{
            return {
                ...state,
                filter: action.value,
            }
        }
        case EDIT_TEXT_CHANGE:{
            return{
                ...state,
                editText: action.text,
            }
        }
        case EDIT_TODO:{
            localStorage["redux-store"] = JSON.stringify(state.todos.map((el) => {
                if (el.id === action.id) return {...el, text: state.editText, isEdit: false}
                return el;
            }))
            return{
                ...state,
                todos: state.todos.map((el) => {
                    if (el.id === action.id) return {...el, text: state.editText, isEdit: false}
                    return el;
                })
            }
        }
        case SET_EDIT:{
            return{
                ...state,
                todos: state.todos.map((el) => {
                    if (el.id == action.id) return {...el, isEdit: !el.isEdit}
                    return {...el, isEdit: false};
                })
            }
        }
        case CANCEL_EDIT:{
            return{
                ...state,
                todos: state.todos.map((el) => ({...el, isEdit: false})),
            }
        }
        default:
            return state;
    }
}

export const onTextChange = (text: string): OnTextChangeActionType => ({type: TEXT_CHANGE, text});
export const onAddTodo = ():OnAddTodoActionType => ({type: ADD_TODO});
export const toggleInputState = (): OnToggleInputStateActionType => ({type: TOGGLE_INPUT_STATE});
export const toggleTodoComplete = (id: string): OnToggleTodoCompleteActionType => ({type: TOGGLE_TODO_COMPLETE, id});
export const deleteTodo = (id: string): DeleteTodoActionType => ({type: DELETE_TODO, id});
export const setFilter = (value: "all" | "current" | "completed"): SetFilterActionType => ({type: SET_FILTER, value});
export const onEditTextChange = (text: string): OnEditTextActionType => ({type: EDIT_TEXT_CHANGE, text});
export const editTodo = (id: string):OnEditTodoActionType => ({type: EDIT_TODO, id});
export const setEdit = (id: string):OnSetEditActionType => ({type: SET_EDIT, id});
export const cancelEdit = ():CancelEditActionType => ({type: CANCEL_EDIT});

export default homeReducer;