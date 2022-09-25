import React from "react";
import { Tabs } from '@mui/material'


export default function Navigation( props ) {
    const { currentTab, onChange, children } = props;

    return(
        <Tabs 
            value={ currentTab || 0 }
            onChange={onChange}
            {...props}>
            { children }
        </Tabs>
    )
}