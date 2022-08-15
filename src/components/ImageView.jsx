import React, {useState, useEffect} from "react"
import { Grid, Box, Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { MoreVert } from "@mui/icons-material"
import { useAppContext } from "../utils/AppContext"

export default function ImageView() {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [ pagination, setPagination ] = useState( [1] )
    const [context] = useAppContext()
    

    useEffect(() => {
        setPages(prevPages => (context.posts.length/6))
        loadPagination( context.posts.length/6 )
    }, [context.posts]);
        
    const loadPagination = ( max ) => {
        let _pagination = new Array(max)
        for(let i = 1; i <= max; i++ ){
            _pagination.push(i)
        }
        setPagination( prevPagination => _pagination )
    }


    const getContentPage = ( post, index ) => {
        const step = context.posts.length / 6
        const min = 6*(page - 1)
        const max = min + step
        if( ( min <= index ) && (index<=max) ){
            return post;
        }
    }

    const toStep = (step) => () => {
        if(( page + step >= 1 ) && ( page + step <= pages ) ) {
            setPage( prevPage => (prevPage + step))
        }
    }

    const actionPost = (id) => () => {
        console.log('actionPost',id)
    }

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
                <Grid container>
                    <Grid item xs={4}>
                        <Button onClick={toStep(-1)}>Back</Button>
                        <Button onClick={toStep(1)}>Next</Button>
                    </Grid>
                    <Grid item xs={8}>
                        {pagination.map( pag => ( 
                            <Button 
                                variant={pag-page===0?"contained":"text"}
                                key={pag}  
                                onClick={toStep(pag - page)} 
                                style={{marginRight:'2px', marginLeft:'2px'}}
                            >{pag}</Button>
                        ))}                        
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}