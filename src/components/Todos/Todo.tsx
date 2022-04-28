import React, {useId} from 'react';
import {Button, Paper, styled, SvgIcon} from "@mui/material";
import {Check, Edit, Delete} from "@mui/icons-material";

type TodoPropsType = {
    id: string,
    key: string,
    text: string,
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h5,
    padding: theme.spacing(2),
    textAlign: 'start',
    color: theme.palette.text.secondary,
}));

const Todo = (props: TodoPropsType) => {

    return (
        <Item>
            <div>
                {props.text}
            </div>
            <Button>
                <Check/>
            </Button>
            <Button>
                <Edit/>
            </Button>
            <Button>
                <Delete/>
            </Button>
        </Item>
    );
};

export default Todo;