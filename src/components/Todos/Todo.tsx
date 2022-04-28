import React, {useId} from 'react';
import {Box, Button, Paper, styled, SvgIcon} from "@mui/material";
import {Check, Edit, Delete, Clear} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {deleteTodo, onTextChange, toggleTodoComplete} from "../../redux/home-reducer";

type TodoPropsType = {
    id: string,
    key: string,
    text: string,
    isComplete: boolean,
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h5,
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const Todo = (props: TodoPropsType) => {
    let TodoTextStyle = {
        textDecoration: (props.isComplete) ? "line-through" : "none",
    }
    const dispatch = useDispatch();
    return (
        <Item>
            <Box sx={TodoTextStyle}>
                {props.text}
            </Box>
            <Button onClick = {(e) => {dispatch(toggleTodoComplete(props.id))}}>
                {(props.isComplete) ? <Clear/> : <Check/>}
            </Button>
            <Button>
                <Edit/>
            </Button>
            <Button onClick = {() => {dispatch(deleteTodo(props.id))}}>
                <Delete/>
            </Button>
        </Item>
    );
};

export default Todo;