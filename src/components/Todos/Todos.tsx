import React from 'react';
import {Box, Stack} from "@mui/material";
import {useSelector} from "react-redux";
import {InitStateType, TodoType} from "../../redux/home-reducer";
import Todo from "./Todo";

let StyledTodos: object = {
    width: "70%",
    margin: "0 auto",
    border: "10px solid #fff"
}

const Todos = () => {
    console.log("Im Todos, i was randered")

    let todos:Array<TodoType> = useSelector((state:any) => state.home.todos);
    let JSXtodos: Array<JSX.Element> = todos.map((el:TodoType) => {
        return <Todo key={el.id} id={el.id} text = {el.text} isComplete = {el.isComplete}/>
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