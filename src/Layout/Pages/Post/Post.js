import {Card, Icon, Image} from "semantic-ui-react";
import React from 'react'
import "./Post.css"
import {useState} from 'react';

const Post = ({content, author, url, time, likes, comments_counter}) => {
    const [likes_counter, setLikes] = useState(likes);
    const [is_liked, setLikeState] = useState(false);

    const like = () => {
        setLikes(is_liked ? likes_counter - 1 : likes_counter + 1);
        setLikeState(!is_liked);
    }

    return <div className="post">
        <Card className="card-adjusments">
            <Card.Content textAlign="right" className="user-display">{author}</Card.Content>
            <Image centered className="image-adjustments" src={url} wrapped ui={false}/>
            <Card.Content>
                <Card.Meta>
                    <span className='date'>{time}</span>
                </Card.Meta>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Content>
            <Card.Content className={"likes-comments"} extra>
                <a onClick={like} >
                    <Icon name='like' color={"red"} disabled={!is_liked}/>
                    <label style={{fontWeight:"bold"}}>{likes_counter} likes</label>
                </a>
                <a>
                    <Icon name='comment'/>
                    <label style={{fontWeight:"bold"}}>{comments_counter} comments</label>
                </a>
            </Card.Content>
        </Card>
    </div>
}

export default Post