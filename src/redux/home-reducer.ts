export type TodoType = {
    id: number,
    isComplete: boolean,
    text: string,
}
export type InitStateType = {
    todos: Array<TodoType>,
    inputText: string,
}
type OnTextChangeActionType = {
    type: typeof TEXT_CHANGE,
    text: string
}
type OnAddTodoActionType = {
    type: typeof ADD_TODO,
}

const TEXT_CHANGE = "TEXT_CHANGE";
const ADD_TODO = "ADD_TODO";


let initState: InitStateType = {
    todos: [{id: 1, isComplete: true, text: "Hello"}],
    inputText: "",
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
                todos: [...state.todos, {id: 2, isComplete: false, text: state.inputText}]
            }
        }
        default:
            return state;
    }
}

export let onTextChange = (text: string): OnTextChangeActionType => ({type: TEXT_CHANGE, text});
export let onAddTodo = () => ({type: ADD_TODO});

export default homeReducer;