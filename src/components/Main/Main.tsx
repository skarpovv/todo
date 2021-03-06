import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import Todos from "../Todos/Todos";
import {useDispatch, useSelector} from "react-redux";
import {onAddTodo, onTextChange, toggleInputState} from "../../redux/home-reducer";

let MainStyle: object = {
    margin: "0 auto",
    maxWidth: "759px",
    height: "100%",
    backgroundColor: "white",
    textAlign: "center",
    marginTop: "20px",
    transition: "all ease 0.6s"
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
    let addTodo = (inputText: string) => {
        if (inputText) {
            dispatch(onAddTodo());
            dispatch(onTextChange(""));
        }
        else{
            dispatch(toggleInputState());
            setTimeout(()=> {dispatch(toggleInputState())},700);
        }
    }
    let inputText = useSelector((state:any):string => state.home.inputText);
    let inputState = useSelector((state:any):boolean => state.home.inputState);
    console.log(inputText);
    return (
        <Box sx={MainStyle} >
            <Box sx={InputStyle}>
            <TextField id="outlined-basic"
                       error = {inputState}
                       value={inputText}
                       onChange={(e)=>{changeText(e.target.value)}}
                       label={(inputState) ? "Enter to do text" : "To do ..."}
                       variant="outlined"

                       sx={{width: "70%", outlineColor: "#32b87b", borderColor: "#32b87b"}}
                       />
            <Button
                sx={{backgroundColor: "#32b87b", '&:hover':{backgroundColor: "#43c98c"}}}
                variant="contained"
                onClick={() => {
                    addTodo(inputText);
                } }>Add Todo</Button>
            </Box>
            <Todos/>
        </Box>

    );
};

export default Main;