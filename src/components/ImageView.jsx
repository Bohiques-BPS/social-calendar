import React, {useState, useEffect} from "react"
import { Grid, Box, Button, ImageList } from "@mui/material"

export default function ImageView( props ) {
    const {maxPages, onChangePagination, children} = props
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(maxPages);
    const [pagination, setPagination ] = useState([1])

    

    useEffect(() => {
        setPages(prevPages => (maxPages))
        let _pagination = new Array(maxPages)
        for(let i = 1; i <= maxPages; i++ ){
            _pagination[i-1] = i
        }
        setPagination( prevPagination => (_pagination))
    }, [ maxPages ]);
        
    
    const toStep = (step) => () => {
        if(( page + step >= 1 ) && ( page + step <= pages ) ) {
            setPage( prevPage => {
                if( onChangePagination ) onChangePagination( prevPage + step );
                return prevPage + step
            })
        }
    }


    return(
        <Box>
            <ImageList rowHeight={280} {...props}>
                {children}
            </ImageList>
            <Box>
                <Grid container>
                    <Grid item xs={4} style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Button onClick={toStep(-1)}>Back</Button>
                        <Button onClick={toStep(1)}>Next</Button>
                    </Grid>
                    <Grid item xs={8} style={{paddingBottom:'10px'}}>
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