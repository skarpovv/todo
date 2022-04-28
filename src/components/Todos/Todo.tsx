import React, {useId} from 'react';
import {Box, Button, Input, Paper, styled, SvgIcon, TextField} from "@mui/material";
import {Check, Edit, Delete, Clear} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {deleteTodo, onTextChange, toggleTodoComplete} from "../../redux/home-reducer";

type TodoPropsType = {
    id: string,
    key: string,
    text: string,
    isComplete: boolean,
    isEdit: boolean,
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
        transition: "all ease 0.6s",
    }
    let TodoStyled = {
        backgroundColor: (props.isComplete) ? "#ccc" : "#fff",
        color: (props.isComplete) ? "#900" : "black",
        transition: "all ease 0.6s",
    }
    const dispatch = useDispatch();
    return (
        (!props.isEdit) ?
        <Item sx={TodoStyled}>
            <Box sx={TodoTextStyle}>
                {props.text}
            </Box>
            <Button onClick = {(e) => {dispatch(toggleTodoComplete(props.id))}}>
                {(props.isComplete) ? <Clear color={"error"}/> : <Check/>}
            </Button>
            <Button disabled={props.isComplete}>
                <Edit color={(props.isComplete) ? "error" : "primary"}/>
            </Button>
            <Button onClick = {() => {dispatch(deleteTodo(props.id))}}>
                <Delete color={(props.isComplete) ? "error" : "primary"}/>
            </Button>
        </Item>
        :
        <Item>
            <TextField id="outlined-basic"
                       onChange={(e)=>{}}
                       label="To do ..."
                       variant="outlined"
                       sx={{width: "100%", outlineColor: "#32b87b", borderColor: "#32b87b"}}
            />
            <Button>
                <Check/>
            </Button>
            <Button>
                <Clear color="error"/>
            </Button>
        </Item>

    );
};

export default Todo;