import {List} from "semantic-ui-react";
import React from 'react'
import "./Feed.css"
import Post from "../Post/Post";

const Feed = ({posts}) => {
    const postsComponents = posts.map(post =>
        <List.Item><Post content={post.content}
                         author={post.author} url={post.url}
                         time={post.time} likes={post.likes}
                         comments_counter={post.comments_counter}/></List.Item>)
    return <div className="Feed">
        <List>
            {postsComponents}
        </List>
    </div>
}

export default Feed
