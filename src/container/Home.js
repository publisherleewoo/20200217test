import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MainVisual from '../component/MainVisual';
import FeaturedPost from '../component/FeaturedPost';
import Header from '../common/Header';
import Footer from '../common/Footer';
import store from '../store'

const mainVisual = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'more Link',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

class Home extends Component {

    constructor() {
        super()
        this.state = {
            islogin: false,
            userInfo: {

            }
        }
    }

    componentDidMount(){
        let {userInfo} =store.getState();
        if(userInfo){
            this.setState({
                islogin:true,
                userInfo
            })
        }
    }
 


    render() {
        let {islogin,userInfo} = this.state
        return (
            <>
                <Header islogin={islogin} userInfo={userInfo}/>
                <MainVisual post={mainVisual}/>
                <Grid container spacing={4}>
                    {featuredPosts.map(post => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                </Grid>
                <Footer />
            </>
        );
    }
}

export default Home;    