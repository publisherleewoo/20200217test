import React, { Component } from 'react';
import MainVisual from '../component/MainVisual'
import {Grid} from '@material-ui/core'
import BoardTable from '../component/BoardTable'

const mainVisual = {
    title: 'Board Page Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'more Link',
};

let Board =()=> {

    
        return (
            <>
                <MainVisual post={mainVisual} />
                <Grid container>                      
                 <BoardTable></BoardTable>
                </Grid>
            </>
        );
    
}

export default Board;    