import React from 'react';
import {Box, AppBar, IconButton, Toolbar, Typography, ToggleButton, ToggleButtonGroup} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/home-reducer";

const Header = () => {
    let filter = useSelector((state:any):string => state.home.filter);
    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: "#32b87b"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color={"inherit"}
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
                        TO DO
                    </Typography>
                    <ToggleButtonGroup
                        sx={{ flexGrow: 1, color: "white", transition: "all ease 0.6s", "& button":{
                            color: "white",
                                outlineColor: "white", border: "1px dotted #fff",
                            }, "& button:focus": {color: "#000"}, "& button:active": {color: "#000"} }}
                        color="primary"
                        value={filter}
                        exclusive
                        onChange={(event, value)=>{ value && dispatch(setFilter(value))}}
                    >
                        <ToggleButton value="all">All</ToggleButton>
                        <ToggleButton value="current">Current TO DO</ToggleButton>
                        <ToggleButton value="completed">Completed</ToggleButton>
                    </ToggleButtonGroup>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;