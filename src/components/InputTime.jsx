import React from 'react'
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { MaskString } from './index'

export default function InputTime({ children, onIncrement, onDecrement, value, min, max }) {

    const increment = () => {
        const newValue = parseInt(value) + 1
        if( max && newValue > max ) onIncrement( min )
        else onIncrement( newValue )
        
    }

    const decrement = () => {
        const newValue = parseInt(value) - 1
        if( min && newValue < min ) onIncrement( max )
        else onIncrement( newValue )
        
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