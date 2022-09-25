import React, {useEffect} from 'react'
import { Box, Typography } from "@mui/material"
import { InputTime } from './index'
import { MaskString } from './index'


export default function TimePickerInput({ time, format, onPicker }) {
    
    const initTime = ( completeTime ) => {
        const now = new Date()
        now.setHours( completeTime.split(':')[0] || 0 )
        now.setMinutes( completeTime.split(':')[1] || 0 )
        now.setSeconds( completeTime.split(':')[2] || 0 )
        return now;        
    }


    const [ hour, setHour ] = React.useState( (() => {
        
        if( format === '12H' ) return ((new Date( initTime(time) ).getHours() + 11) % 12 + 1);
        return new Date( initTime(time) ).getHours()
        
    })() )
    const [ minute, setMinute ] = React.useState( new Date( initTime(time) ).getMinutes() )
    const [ seconds, setSeconds ] = React.useState( new Date( initTime(time) ).getSeconds() )
    const [ meridian, setMeridian ] = React.useState( new Date( initTime(time) ).getHours() > 12 ? 1 : 0 )

    useEffect(() => {
        if( onPicker ){
            onPicker( prev => {
                if(format==='12H'){
                    if(meridian){
                        return `${hour===12?0:hour+12}:${minute}:${seconds}`
                    }else{
                        return `${hour}:${minute}:${seconds}`
                    }                    
                }else{
                    return `${hour}:${minute}:${seconds}`
                }
            } )
        }
    }, [hour, minute, seconds, meridian]);

    const maxHour = () => {
        if( format === '12H' ) return 12
        else return 23
    }

    const minHour = () => {
        if( format === '12H' ) return 1
        else return 0
    }

    return (
        <Box style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <InputTime 
                onIncrement={setHour} 
                onDecrement={setHour}
                max={ maxHour() }
                min={ minHour() }
                value={hour}
            >
                <MaskString pattern={String(hour).length==2?'##':'0#'} content={String(hour)} />
            </InputTime>
            <Typography>:</Typography>
            <InputTime 
                onIncrement={setMinute} 
                onDecrement={setMinute}
                max={59}
                min={0}
                value={minute}
            >
                <MaskString pattern={String(minute).length==2?'##':'0#'} content={String(minute)} />
            </InputTime>
            <Typography>:</Typography>
            <InputTime 
                onIncrement={setSeconds} 
                onDecrement={setSeconds}
                max={59}
                min={0}
                value={seconds}
            >
                <MaskString pattern={String(seconds).length==2?'##':'0#'} content={String(seconds)} />
            </InputTime>
            { format==='12H' && 
                (<InputTime 
                    onIncrement={setMeridian} 
                    onDecrement={setMeridian}
                    max={1}
                    min={0}
                    value={meridian}
                >
                    {['AM','PM'][meridian]}
                </InputTime>)
            }
        </Box>
    )
}