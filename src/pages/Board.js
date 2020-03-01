import React, { useState, useEffect } from 'react';
import MainVisual from '../component/MainVisual'
import { Grid, CircularProgress } from '@material-ui/core'
import BoardTable from '../component/BoardTable'
import Axios from 'axios'
const mainVisual = {
    title: 'Board Page Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'more Link',
};

let Board = () => {
    let [data, setData] = useState(null)

    useEffect((a, b) => {
        Axios.get('/board').then(r => {
            if(r.data.code ===1){
               return setData(r.data.data)
            }else{
                alert(r.data.msg)
            }
        }).catch(err => {
            alert(err)
        })
    }, [])

    return (
        <>

            {
                (!data) ?
                    <CircularProgress />
                    :
                    <>
                        <MainVisual post={mainVisual} />
                        <Grid container>
                            <BoardTable data={data}   ></BoardTable>
                        </Grid>
                    </>
            }
        </>
    );

}

export default Board;    