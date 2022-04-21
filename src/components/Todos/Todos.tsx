import React from 'react';
import {Box} from "@mui/material";

let StyledTodos: object = {
    width: "70%",
    margin: "0 auto",
    border: "2px solid #32b87b"
}

const Todos = () => {
    return (
        <Box sx={StyledTodos}>
            Hello, here will be Todos
        </Box>
    );
};

export default Todos;