import React, {useState} from "react"
import { Box, Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { MoreVert } from "@mui/icons-material"
import { getList } from '../actions/mockupPost'
import { useAppContext } from "../utils/AppContext"

export default function ImageView() {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [context, setContext] = useAppContext()

    const getData = async () => {
        const { data } = await getList()
        setPages(prevPages => (data.length/6))
        setContext(prevContext => ({
            ...prevContext,
            posts:data.map( elem => {elem.load = false; return elem})
        }))
    }
    
    
    (context.posts.length === 0) && getData()

    const getContentPage = ( post, index ) => {
        const step = context.posts.length / 6
        const min = 6*(page - 1)
        const max = min + step
        if( ( min <= index ) && (index<=max) ){
            return post;
        }
    }

    const toStep = (step) => {
        if(( page + step >= 1 ) && ( page + step <= pages ) ) {
            setPage( prevPage => (prevPage + step))
        }
    }

    const actionPost = (id) => (() => {
        console.log(id)
    })

    return(
        <Box>
            <ImageList rowHeight={280} >
                { context.posts.filter( getContentPage ).map( (post,index) => ( 
                    <ImageListItem key={post.id} >
                        <img 
                            src={post.download_url}
                            alt={post.author}
                            loading="lazy"
                            style={{
                                height: 280
                            }}
                        />
                        <ImageListItemBar
                            title={'Author: '+post.author}
                            subtitle={"Image from Picsum "}
                            actionIcon={
                                <IconButton onClick={actionPost(post.id)}>
                                    <MoreVert sx={{color:"white"}}></MoreVert>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box>
                <Button onClick={()=>{toStep(-1)}}>Back</Button>
                <Button onClick={()=>{toStep(1)}}>Next</Button>
            </Box>
        </Box>
    )
}