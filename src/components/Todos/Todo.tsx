import React from 'react';
import {Paper, styled} from "@mui/material";

type TodoPropsType = {
    key: string,
    text: string,
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const Todo = (props: TodoPropsType) => {
    console.log("Hi, im todo")
    return (
        <Item>
            {props.text}
        </Item>
    );
};

export default Todo;