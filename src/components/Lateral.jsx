import React from 'react'

import { Tabs, Tab, Divider } from '@mui/material'

export default function Lateral() {

    return(
        <Tabs value={0} orientation='vertical'>
            <Divider />
            <Tab label='Menu Lateral 1' value={1} key={1} style={{padding:'25px'}}/><Divider />
            <Tab label='Menu Lateral 2' value={2} key={2} style={{padding:'25px'}}/><Divider />
            <Tab label='Menu Lateral 3' value={3} key={3} style={{padding:'25px'}}/><Divider />
            <Tab label='Menu Lateral 4' value={4} key={4} style={{padding:'25px'}}/><Divider />
            <Tab label='Menu Lateral 5' value={5} key={5} style={{padding:'25px'}}/><Divider />
            <Tab label='Menu Lateral 6' value={6} key={6} style={{padding:'25px'}}/><Divider />
        </Tabs>
    )
}