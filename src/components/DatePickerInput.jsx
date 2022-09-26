import React, { useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import { InputTime } from './index'
import { MaskString } from './index'


export default function DatePickerInput({ date, onPicker, minYear, maxYear }) {

    const [ day, setDay ] = React.useState(new Date( date ? date : Date.now() ).getDate() )
    const [ month, setMonth ] = React.useState((new Date( date ? date : Date.now() ).getMonth()) + 1)
    const [ year, setYear ] = React.useState(new Date( date ? date : Date.now() ).getFullYear())

    useEffect(() => {
        if( onPicker ){
            onPicker( prev => (`${month}-${day}-${year}`) )
        }
    }, [day, month, year]);
    
    const getDayQuantity = () => {
        if(( month <=7 && month%2===1 ) || ( month>7 && month%2===0 ))  return 31
        else if( month === 2 && ( year%100===0 || year%400===0 ) ) return 29
        else if( month === 2 ) return 28
        else return 30
    }

    return (
        <Box style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <InputTime 
                onIncrement={setDay} 
                onDecrement={setDay}
                max={ getDayQuantity() }
                min={1}
                value={day}
            >{day}</InputTime>
            <Typography>/</Typography>
            <InputTime 
                onIncrement={setMonth} 
                onDecrement={setMonth}
                min={1}
                max={12}
                value={month}
            >
                <MaskString pattern={String(month).length==2?'##':'0#'} content={String(month)} />
            </InputTime>
            <Typography>/</Typography>
            <InputTime 
                onIncrement={setYear} 
                onDecrement={setYear}
                min={ minYear || 0 }
                max={ maxYear }
                value={year}
            >{year}</InputTime>
        </Box>
    )
}