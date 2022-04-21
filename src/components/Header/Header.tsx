import React from 'react';
import {Box, AppBar, IconButton, Toolbar, Typography, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TO DO
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;