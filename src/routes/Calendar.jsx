import React,{ useState } from 'react';
import { Grid, Box, Typography, List } from '@mui/material'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers';

import { useAppContext } from '../utils/AppContext';
import { Lateral, RenderDay, ScheduleList } from '../components';



export default function Calendar() {
    const [value, setValue] = useState(dayjs());
    const [month, setMonth] = useState( value.month()+1 )
    const [year, setYear] = useState( value.year() )
    
    const [context, setContext] = useAppContext()
 
    return (
        <Grid container>
            <Grid item xs={2}>
                <Lateral />
            </Grid>
            <Grid item xs={7}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CalendarPicker
                        variant="fullwidth"
                        date={value}
                        disablePast
                        views={['day']}
                        onMonthChange={ newDate => {
                            setMonth(prevMonth => (newDate.month()+1)); 
                            setYear(prevYear => newDate.year())
                        } }                        
                        onChange={(newDate) => setValue( prevDate => (newDate)) }
                        renderDay={(day, selectedDate, DayComponentProps) => <RenderDay day={day} selectedDate={selectedDate} DayComponentProps={DayComponentProps} />}/>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <Typography variant='h6'>Schedules {month}</Typography>
                    <List>
                    {
                        context.scheduled
                            .filter( (months, index) => ( (index+1)===parseInt(month) ) )[0]
                            .filter( schedule => schedule.year===year )
                            .sort( (primarySchedule, secondSchedule) => {
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
                                <ScheduleList key={schedule.date} date={schedule.date} target={schedule.target} />
                            ) )                      
                    }
                    </List>
                </Box>
            </Grid>
        </Grid>
    );
}