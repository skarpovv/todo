import React from 'react';
import {Box, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import {InitStateType, TodoType} from "../../redux/home-reducer";
import Todo from "./Todo";

let StyledTodos: object = {
    width: "70%",
    margin: "0 auto",
    border: "10px solid #fff",
    transition: "all ease 0.6s"
}

let filterTodos = (todos: Array<TodoType>, filter: "all" | "current" | "completed"):Array<TodoType> => {
    if (filter === "all") return todos;
    if (filter === "current") return todos.filter((el) => el.isComplete === false);
    if (filter === "completed") return todos.filter((el) => el.isComplete === true);
}

const Todos = () => {
    let filter = useSelector((state:any):"all" | "current" | "completed" => state.home.filter);

    let todos:Array<TodoType> = filterTodos(useSelector((state:any) => state.home.todos), filter);

    let JSXtodos: Array<JSX.Element> = todos.map((el:TodoType) => {
        return <Todo isEdit={el.isEdit} key={el.id} id={el.id} text = {el.text} isComplete = {el.isComplete}/>
    })

    return (
        <Box sx={StyledTodos}>
            <div>
                <Stack spacing={2}>
                    {JSXtodos}
                </Stack>
            </div>
        </Box>
    );
};

export default Todos;