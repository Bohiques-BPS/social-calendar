import React from "react"
import { ImageListItem, ImageListItemBar } from "@mui/material"

export default function ImageViewItem({src, alt, title, subtitle, actionIcon }) {


    return(
        <ImageListItem>
            <img 
                src={src}
                alt={alt}
                loading="lazy"
                style={{
                    height: 280
                }}
            />
            <ImageListItemBar
                title={title}
                subtitle={subtitle}
                actionIcon={actionIcon}
            />
        </ImageListItem>

    )
}