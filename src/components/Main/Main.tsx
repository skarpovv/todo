import React, {KeyboardEventHandler} from 'react';
import {Box, TextField} from '@mui/material';
import Todos from "../Todos/Todos";

let MainStyle: object = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    textAlign: "center",
    marginTop: "10px"
}

const Main = () => {
    return (
        <Box sx={MainStyle} onClick={(e) => {console.log("123456")}}>
            <TextField id="outlined-basic" label="To do ..." variant="outlined" sx={{width: "70%"}}
                       onKeyPress={(e) => {if (e.code === "Enter") console.log("That's Enter")}}/>
            <Todos/>
        </Box>

    );
};

export default Main;