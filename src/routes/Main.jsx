import React, {useState} from "react";
import { Grid, Typography, Tabs, Tab, Divider, Button, StepContext } from "@mui/material";
import { CalendarMonth, FacebookRounded } from "@mui/icons-material";

import { Lateral, ImageView, ImageViewItem, ScheduleShare } from "../components";
import { useAppContext } from "../utils/AppContext";

import { uploadSingleFile } from "../utils/UploadFiles"
//import imageExample from '../assets/image.jpg'

export default function Main(){
    const [ context, setContext ] = useAppContext()
    const changePagination = (page) => {
        console.log( page )
    }
    const imageExample = 'upload/image.jpg'

    const shareAction = (url) => () => {
        const link = `https://www.facebook.com/dialog/share?app_id=${process.env.REACT_APP_API_FACEBOOK_ID}&display=popup&href=https://i.picsum.photos/id/528/300/200.jpg?hmac=drdAfS874RKa2Qd7QNzUY_vQJ8-DDvG0MwB7XIFd2Oc`
        console.log('Share '+link)
        const elementLink = document.createElement('a')
        elementLink.setAttribute('href', link)
        elementLink.setAttribute('target', '_blank')
        elementLink.setAttribute('rel', 'noreferrer')
        elementLink.click()
    }

    const scheduleAction = (url) => () => {
        setContext( prevContext => ({
            ...prevContext,
            modal:{
                open: !prevContext.openModal, 
                avatar: (<CalendarMonth style={{ marginRight:'10px' }} />),
                title: 'Scheduling Share',
                content: (
                    <ScheduleShare>
                        <ImageViewItem src={ url } />
                    </ScheduleShare>
                )
            }            
        }))
    }

    const actionsButton = (url) => {
        return(
            <>
                <Button onClick={shareAction( url )}>
                    <FacebookRounded style={{ marginRight:'10px', color:'#fff' }} />
                </Button>
                <Button onClick={scheduleAction( url )}>
                    <CalendarMonth style={{ marginRight:'10px', color:'#fff' }} />
                </Button>
            </>
        )
    }

    const uploaded = async ({target}) => {
        const data = await uploadSingleFile(target.files[0])
        console.log( data )
    }

    return(    
        <Grid container>
            <Grid item xs={2} style={{ marginTop:'15px' }}>
                <Lateral />
            </Grid>
            <Grid item xs={10}>
                <ImageView 
                    cols={3}
                    maxPages={7}
                    onChangePagination={changePagination}>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                    <ImageViewItem src={ imageExample } title={ <Typography>Title</Typography> } subtitle={'subtitle'} actionIcon={ actionsButton( imageExample ) }/>
                </ImageView>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" onChange={uploaded} type="file" />
                </Button>
            </Grid>
        </Grid>
    )
}