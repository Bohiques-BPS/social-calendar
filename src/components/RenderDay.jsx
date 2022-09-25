import React, {useState} from "react"
import { useAppContext } from "../utils/AppContext"

import { CalendarMonth, Facebook, Twitter, Instagram } from '@mui/icons-material'
import { PickersDay } from '@mui/x-date-pickers';

import { ScheduleShare, FeedRSS } from '../components';

import { setSchedule } from "../actions";

export default function RenderDay({day, selectedDate, DayComponentProps}) {
    const [context, setContext] = useAppContext()

    let facebook = false, instagram = false, twitter = false
    
    DayComponentProps.scheduled = context.scheduled[ day.month() ].filter( schedule => {
        const keydate = `${day.month()+1}-${day.date()}-${day.year()}`
        return schedule.date===keydate
    } ).length>0?'true':'false'

    const selectRSS = (active, index, icon) => {
        switch(index){
            case 0:
                facebook = active
                return
            case 1: 
                instagram = active
                return
            case 2:
                twitter = active
                return
        }
    }

    const onScheduleAction = async ( time, date, src, setMessage ) => {
        const currentMonth = parseInt( date.split('-')[0] ) - 1
        const currentYear = parseInt( date.split('-')[2] )
        if( facebook || instagram || twitter ){
            const newSchedule = {
                isScheduled: true,
                date: date,
                year: currentYear,
                target: {
                    facebook,
                    instagram,
                    twitter,
                }
            }
            const newContexSchedule = context.scheduled.map( (content, month) => (month==currentMonth?[...content, newSchedule ]:content) )

            await setSchedule( newContexSchedule )

            setContext( prevContext => ({
                ...prevContext,
                scheduled: prevContext.scheduled.map( (content, month) => (month==currentMonth?[...content, newSchedule ]:content) ),
                modal: {
                    open: false
                }
            }))
        }
    }

    const confirmDay = () => {
        setContext( prevContext => ({
            ...prevContext,
            modal:{
                open: !prevContext.openModal, 
                avatar: (<CalendarMonth style={{ marginRight:'10px' }} />),
                title: 'Scheduling Share',
                content: (
                    <ScheduleShare 
                        currentdate={`${day.month()+1}-${day.date()}-${day.year()}`}
                        otherAction={<FeedRSS onSelect={selectRSS} items={[<Facebook />, <Instagram />, <Twitter />]} />}
                        onSchedule={ onScheduleAction }/>
                )
            }            
        }))
    }

    return (
        <PickersDay
            onClick={confirmDay}
            className={['selectable', (DayComponentProps.scheduled==='true') && 'scheduled']}
            {...DayComponentProps}
        />
    );
}