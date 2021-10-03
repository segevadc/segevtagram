import React, {useEffect, useState} from 'react'
import "./Post.css"
import Post from "./Post";
import {SegevgramApi} from "../../../api/SegevgramApi";
import {Loader} from "semantic-ui-react";

export const PostPage = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');


    useEffect(() => {
        (async () => {
            setLoading(true);
            console.log("loading...")
            const post = await SegevgramApi.getPost(postId);
            console.log("2: " + post.data)
            setPost(post.data);
            setLoading(false);
        })();
    }, [postId])

    return loading ? <Loader size='huge' active/> :
        <div>
            <Post content={post.content}
                  author={post.author} url={post.url}
                  time={post.time} likes={post.likes}
                  comments_counter={post.comments_counter}
                  id={post.id}
            initShowComments={true}/>
        </div>
}
