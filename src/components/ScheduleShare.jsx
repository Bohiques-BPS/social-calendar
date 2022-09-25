import React, { useState } from 'react'
import { Grid, Box, Button, Typography } from '@mui/material'
import { ImageViewItem, TimePickerInput, DatePickerInput } from './index'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { uploadSingleFile } from '../utils/UploadFiles';

export default function ScheduleShare({ currentdate, children, onSchedule, otherAction, disabled }) {

    const [ time, setTime ] = useState( (
        () => {
            const current = new Date( currentdate ? currentdate : Date.now() )
            return `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
        }
    )() )
    const [ date, setDate ] = useState( (
        () => {
            const current = new Date( currentdate ? currentdate : Date.now() )
            return `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`
        }
    )() )

    const [ loading, setLoading ] = useState(false)
    const [ loaded, setLoaded ] = useState(false)
    const [ src, setSrc ] = useState('')
    const [ message, setMessage ] = useState('')

    const loadFile = async ({ target }) => {
        const reader = new FileReader()

        reader.addEventListener( 'loadend', ({ target }) => {
            setSrc( prevSrc => (target.result) )
            setLoaded( preLoaded => (true) )
        } )
        reader.readAsDataURL( target.files[0] )
    }

    const onClickSchedule = () => {
        if( onSchedule ){
            onSchedule( time, date, src, setMessage )
            setTimeout( ()=>{
                setMessage( prevMessage=>(''))
            },2000)
        }
    }

    return(
        <Grid container>
            <Grid item xs={6} style={{ border: '1px solid #a1a1a1', borderRadius: '10px'}}>{
                children ? 
                (children) 
                : (                    
                    <Box style={{ display:'flex', textAlign:'center', justifyContent:'center', alignItems: 'center', height:'100%'}}>
                        {!loaded && (
                            <Button component="label">
                                <AddCircleOutlineIcon />
                                <input hidden accept="image/*" onChange={loadFile} type="file" />
                            </Button>
                        )}
                        {loaded && (<ImageViewItem src={ src } />)}
                    </Box>
                )
            }</Grid>
            <Grid item xs={6}>
                <Typography variant='h5' component='div' align='center'>Time:</Typography>
                <TimePickerInput time={time} onPicker={setTime} />
                <Typography variant='h5' component='div' align='center'>Date:</Typography>
                <DatePickerInput date={date} onPicker={setDate}/>
                <Box style={{ display:'flex', justifyContent:'center' }}>
                    <Button variant='contained' disabled={disabled} onClick={ onClickSchedule }>Schedule </Button>
                </Box>
                <Box style={{ display:'flex', justifyContent:'center', minHeight:'8px' }}>
                    <small style={{ color: 'red', minHeight:'8px', textAlign:'center' }}>{message}</small>
                </Box>
                <Box style={{display:'flex',justifyContent:'center', margin:'5px'}}>
                    { otherAction }
                </Box>
            </Grid>
        </Grid>
    )


}