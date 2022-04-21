type TodoType = {
    id: number,
    isComplete: boolean,
    text: string,
}
type InitStateType = {
    todos: Array<TodoType>,
    inputText: string,
}
type OnTextChangeActionType = {
    type: typeof TEXT_CHANGE,
    text: string
}

const TEXT_CHANGE = "TEXT_CHANGE";


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
        default:
            return state;
    }
}

let onTextChange = (text: string): OnTextChangeActionType => ({type: TEXT_CHANGE, text});

export default homeReducer;