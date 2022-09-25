import React from "react"
import { ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

export default function ScheduleList({ date, target }){


    return(
        <>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={<b>{date}</b>}/>
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