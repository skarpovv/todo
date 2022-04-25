import React from 'react';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {InitStateType, TodoType} from "../../redux/home-reducer";
import Todo from "./Todo";

let StyledTodos: object = {
    width: "70%",
    margin: "0 auto",
    border: "2px solid #32b87b"
}

const Todos = () => {
    console.log("Im Todos, i was randered")

    let todos:Array<TodoType> = useSelector((state:any) => state.home.todos);
    let JSXtodos = todos.map((el:TodoType) => {
        return <Todo key={el.text} text = {el.text}/>
    })
    debugger

    return (
        <Box sx={StyledTodos}>
            <div>
                {JSXtodos}
            </div>
        </Box>
    );
};

export default Todos;