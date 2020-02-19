import React, { Component } from 'react';
import MainVisual from '../component/MainVisual'
import Header from '../common/Header';
import Footer from '../common/Footer';
const mainVisual = {
    title: 'Board Page Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'more Link',
};

class Board extends Component {
    render() {
        return (
            <>
                <Header />
                <MainVisual post={mainVisual} />
                <Footer />
            </>
        );
    }
}

export default Board;    