import React, { useState } from 'react'
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'

export default function FeedRSS({items, onSelect, selected}){
    
    const renderIcon = (item, index, isSelected) => {
        const [ active, setActive ] = useState( false || isSelected )
        const Item = {...item, props: { ...item.props, color:(active ? 'primary' : '')}};
        return(<IconButton key={index} onClick={()=>{
                setActive(prevActive => (!active))
                if(onSelect){
                    onSelect(!active, index, items[index])
                }
            }}
        >{Item}</IconButton>)
    }

    return(<Box>
        {items.map( (item, index) => (renderIcon(item, index, selected)))}
    </Box>)
}
