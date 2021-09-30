import {Card, Icon, Image} from "semantic-ui-react";
import React from 'react'
import "./Post.css"

const Post = ({content, author, url, time, likes, comments_counter}) => (
    <div className="post">
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
                <a>
                    <Icon name='like'/>
                    {likes} likes
                </a>
                <a>
                    <Icon name='comment'/>
                    {comments_counter} comments
                </a>
            </Card.Content>
        </Card>
    </div>
)

export default Post
