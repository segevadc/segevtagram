import {Comment, FeedDate} from "semantic-ui-react";
import React from 'react'
import "./comment.css"

const UserComment = ({author, time, content, avatarUrl}) => {
    return <div>
        <Comment className="comment-adjustments">
            <Comment.Avatar src={avatarUrl}/>
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    {/*<label>{time}</label>*/}
                </Comment.Metadata>
                <Comment.Text>{content}</Comment.Text>
            </Comment.Content>
        </Comment>
    </div>
}

export default UserComment;