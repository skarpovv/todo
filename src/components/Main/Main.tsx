import React, {KeyboardEventHandler} from 'react';
import {Box, Button, TextField} from '@mui/material';
import Todos from "../Todos/Todos";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, onAddTodo, onTextChange, toggleInputState} from "../../redux/home-reducer";

let MainStyle: object = {
    margin: "0 auto",
    width: "50%",
    height: "100%",
    backgroundColor: "white",
    textAlign: "center",
    marginTop: "20px"
}
let InputStyle = {
    display: "flex",
    justifyContent: "space-around",
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
    let a: boolean = true;
    let inputState = useSelector<boolean>((state:any) => state.home.inputState);
    console.log(inputText);
    return (
        <Box sx={MainStyle} >
            <Box sx={InputStyle}>
            <TextField id="outlined-basic"
                       error = {inputState as boolean}
                       value={inputText}
                       onChange={(e)=>{changeText(e.target.value)}}
                       label="To do ..."
                       variant="outlined"

                       sx={{width: "70%", outlineColor: "#32b87b", borderColor: "#32b87b"}}
                       />
            <Button
                sx={{backgroundColor: "#32b87b", '&:hover':{backgroundColor: "#43c98c"}}}
                variant="contained"
                onClick={(e) => {
                    if (inputText) {addTodo(); changeText("")}
                    else {
                        dispatch(toggleInputState())
                        setTimeout(()=>{dispatch(toggleInputState())}, 500);
                    }
                }}>Add Todo</Button>
            </Box>
            <Todos/>
        </Box>

    );
};

export default Main;