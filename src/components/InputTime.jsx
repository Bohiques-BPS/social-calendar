import React from 'react'
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

export default function InputTime({ children, onIncrement, onDecrement, value, min, max }) {

    const increment = () => {
        const newValue = parseInt(value) + 1
        if( typeof(max)==='number' && typeof(min)==='number' && newValue > max ) onIncrement( min )
        else if( typeof(min)==='number' && newValue > max ) onIncrement( max )
        else onIncrement( newValue )
    }

    const decrement = () => {
        const newValue = parseInt(value) - 1
        if( typeof(max)==='number' && typeof(min)==='number' && newValue < min ) onDecrement( max )
        else if( typeof(min)==='number' && newValue < min ) onDecrement( min )
        else onDecrement( newValue )
    }    

    return(
        <Box style={{ textAlign:'center' }}>
            <IconButton onClick={increment}>
                <ArrowDropUp />
            </IconButton>
            <Typography >
                {children}
            </Typography>
            <IconButton onClick={decrement}>
                <ArrowDropDown />
            </IconButton>
        </Box>
    )
}