import {Card, Icon, Image} from "semantic-ui-react";
import React, {useState} from 'react'
import "./Post.css"
import Comments from "../Comment/Comments";
import {useHistory} from "react-router-dom";
import {image} from 'faker'

const Post = ({id, content, author, url, time, likes, comments_counter, initShowComments = false}) => {
    const [likes_counter, setLikes] = useState(likes);
    const [is_liked, setLikeState] = useState(false);
    const [showComments, setShowComments] = useState(initShowComments);

    const like = () => {
        setLikes(is_liked ? likes_counter - 1 : likes_counter + 1);
        setLikeState(!is_liked);
    }
    const comment = () => {
        setShowComments(!showComments);
    }

    const history = useHistory();

    const goToPlacePage = (postId) => {
        history.push(`/post?id=${postId}`);
    }

    return <div className="post">
        <Card className="card-adjusments">
            <Card.Content textAlign="right" className="user-display">{author}</Card.Content>
            <Image centered className="image-adjustments" src={image.image()} wrapped ui={false}/>
{/*
            <Image centered className="image-adjustments" src={url} wrapped ui={false}/>
*/}
            <Card.Content>
                <Card.Meta>
                    <span className='date'>{time}</span>
                </Card.Meta>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Content>
            <Card.Content className={"likes-comments"} extra>
                <a onClick={like}>
                    <Icon name='like' color={"red"} disabled={!is_liked}/>
                    <label style={{fontWeight: "bold"}}>{likes_counter} likes</label>
                </a>
                <a onClick={comment}>
                    <Icon name='comment'/>
                    <label style={{fontWeight: "bold"}}>comments</label>
                </a>
                <a onClick={() => goToPlacePage(id)}>
                    <Icon name='external alternate'/>
                </a>
            </Card.Content>
            {showComments ? <Comments postId={id}/> : null}
        </Card>
    </div>
}

export default Post
