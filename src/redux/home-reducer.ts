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

const TEXT_CHANGE = "TEXT_CHANGE";
const ADD_TODO = "ADD_TODO";
const TOGGLE_INPUT_STATE = "TOGGLE_INPUT_STATE";
const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";
const DELETE_TODO = "DELETE_TODO";


let initState: InitStateType = {
    todos: [],
    inputText: "",
    inputState: false
}

let homeReducer = (state = initState, action: any):InitStateType => {
    switch (action.type){
        case TEXT_CHANGE:{
            return {
                ...state,
                inputText: action.text
            }
        }
        case ADD_TODO:{
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
            return{
                ...state,
                todos: state.todos.filter((el) => action.id != el.id),
            }
        }
        default:
            return state;
    }
}

export const onTextChange = (text: string): OnTextChangeActionType => ({type: TEXT_CHANGE, text});
export const onAddTodo = () => ({type: ADD_TODO});
export const toggleInputState = (): OnToggleInputStateActionType => ({type: TOGGLE_INPUT_STATE});
export const toggleTodoComplete = (id: string): OnToggleTodoCompleteActionType => ({type: TOGGLE_TODO_COMPLETE, id});
export const deleteTodo = (id: string): DeleteTodoActionType => ({type: DELETE_TODO, id});

export default homeReducer;