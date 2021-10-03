import {List, Loader} from "semantic-ui-react";
import {useEffect, useState} from 'react'
import "./Feed.css"
import Post from "../Post/Post";
import {SegevgramApi} from "../../../api/SegevgramApi";

const Feed = () => {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const posts = await SegevgramApi.getPosts();
            setPostsList(posts.data);
            setLoading(false);
        })();
    }, [])


    return loading ? <Loader size='huge' active/> :
        <div className="Feed">
            <List>
                {postsList.map(post =>
                    <List.Item>
                        <Post content={post.content}
                              author={post.author} url={post.url}
                              time={post.time} likes={post.likes}
                              comments_counter={post.comments_counter}
                              id={post.id}
                        /></List.Item>)}
            </List>
        </div>
}
export default Feed
