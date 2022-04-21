import React from "react";
import './App.css';
import {Box, Stack, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";




const App = () => {
    return (
        <>
          <Header/>
            <Main/>
        </>
    )
}


export default App;