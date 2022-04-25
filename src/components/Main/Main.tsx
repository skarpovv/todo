import React, {KeyboardEventHandler} from 'react';
import {Box, Button, TextField} from '@mui/material';
import Todos from "../Todos/Todos";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, onAddTodo, onTextChange} from "../../redux/home-reducer";

let MainStyle: object = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    textAlign: "center",
    marginTop: "10px"
}

const Main = () => {

    let dispatch = useDispatch();
    let changeText = (text:string) => {
        dispatch(onTextChange(text));
    }
    let addTodo = () => {
        dispatch(onAddTodo());
    }
    let inputText = useSelector<string>((state:any) => state.home.inputText);
    console.log(inputText);
    return (
        <Box sx={MainStyle} >
            <TextField id="outlined-basic"
                       value={inputText}
                       onChange={(e)=>{changeText(e.target.value)}}
                       label="To do ..."
                       variant="outlined"
                       sx={{width: "70%"}}
                       />
            <Button
                variant="contained"
                onClick={(e) => {addTodo()}}>Add Todo</Button>
            <Todos/>
        </Box>

    );
};

export default Main;