export type TodoType = {
    id: string,
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

const TEXT_CHANGE = "TEXT_CHANGE";
const ADD_TODO = "ADD_TODO";
const TOGGLE_INPUT_STATE = "TOGGLE_INPUT_STATE";


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
                todos: [...state.todos, {id: state.todos.length + state.inputText, isComplete: false, text: state.inputText}]
            }
        }
        case TOGGLE_INPUT_STATE:{
            return {
                ...state,
                inputState: !state.inputState,
            }
        }
        default:
            return state;
    }
}

export let onTextChange = (text: string): OnTextChangeActionType => ({type: TEXT_CHANGE, text});
export let onAddTodo = () => ({type: ADD_TODO});
export let toggleInputState = (): OnToggleInputStateActionType => ({type: TOGGLE_INPUT_STATE})

export default homeReducer;