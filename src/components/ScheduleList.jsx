import React from "react"
import { ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from '@mui/material'
import { Facebook, Twitter, Instagram, CalendarMonth } from '@mui/icons-material'
import { useAppContext } from "../utils/AppContext"

import { ScheduleShare, FeedRSS } from "./index"

export default function ScheduleList({ date, details, target }){
    const [context, setContext] = useAppContext()

    const ViewSchedule = () => {
        setContext( prevContext => ({
            ...prevContext,
            modal:{
                open: !prevContext.openModal, 
                avatar: (<CalendarMonth style={{ marginRight:'10px' }} />),
                title: 'Scheduled',
                content: (
                    <ScheduleShare 
                        currentdate={date}
                        otherAction={
                            <FeedRSS 
                                items={[
                                    <Facebook   color={target.facebook ? 'primary' : ''}/>, 
                                    <Instagram  color={target.instagram ? 'primary' : ''}/>, 
                                    <Twitter    color={target.twitter ? 'primary' : ''}/>]} />}
                    />
                )
            }            
        }))
    }

    return(
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={ ViewSchedule }>
                    <ListItemText primary={
                        <>
                            <b>{date}</b>
                            <br/>
                            <small>{details}</small>
                        </>}/>
                    <ListItemIcon>
                        <Facebook color={target.facebook ? 'primary' : ''}/>
                    </ListItemIcon>
                    <ListItemIcon>
                        <Instagram color={target.instagram ? 'primary' : ''}/>
                    </ListItemIcon>
                    <ListItemIcon>
                        <Twitter color={target.twitter ? 'primary' : ''}/>
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    )
}