import React,{ useState } from 'react';
import { Grid, Box, Typography, List } from '@mui/material'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers';

import { useAppContext } from '../utils/AppContext';
import { Lateral, RenderDay, ScheduleList } from '../components';



export default function ScheduleHistory() {
    
    const [context, setContext] = useAppContext()
 
    return (
        <Grid container>
            <Grid item xs={2}>
                <Lateral />
            </Grid>
            <Grid item xs={10}>
                <Box>
                    <Typography variant='h5'>Schedules History</Typography>
                    <List>
                    {
                        context.scheduled
                            .map( month => 
                                month.sort( (primarySchedule, secondSchedule) => {
                                    if( primarySchedule && secondSchedule ){
                                        const primaryDate = dayjs( primarySchedule.date )
                                        const secondDate = dayjs( secondSchedule.date )
                                        if( primaryDate.isBefore( secondDate ) ) return -1
                                        else if( primaryDate.isSame( secondDate ) ) return 0
                                        else return 1
                                    }
                                    return 1
                                } )
                                .map( schedule => (
                                    <ScheduleList 
                                        details={'algunos detalles extras'}
                                        key={schedule.date} 
                                        date={schedule.date} 
                                        target={schedule.target} />
                                ) ) 
                            )                     
                    }
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}