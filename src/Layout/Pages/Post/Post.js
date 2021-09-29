import {Card, Icon, Image} from "semantic-ui-react";
import React from 'react'
import "./Post.css"

const Post = ({content, author, url, time}) => (
    <div className="post">
        <Card>
            <Card.Header>{author}</Card.Header>
            <Image src={url} wrapped ui={false}/>
            <Card.Content>
                <Card.Meta>
                    <span className='date'>{time}</span>
                </Card.Meta>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='like'/>
                    22 likes
                </a>
            </Card.Content>
        </Card>
    </div>
)

export default Post
/*
export const Post = ({}) => {
    return (
        <div className=''>

        </div>
    )
}*/
