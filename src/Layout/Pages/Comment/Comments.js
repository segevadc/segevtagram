import {Button, Form, Loader} from "semantic-ui-react";
import React, {useEffect, useState} from 'react'
import "../Post/Post.css"
import UserComment from "./userComment";
import {SegevgramApi} from "../../../api/SegevgramApi";
import {image, name} from 'faker'

const Comments = ({postId}) => {
    const [loading, setLoading] = useState(true);
    const [commentsList, setCommentsList] = useState(null);
    const [inputComment, setCommentInput] = useState("");
    useEffect(() => {
        (async () => {
            setLoading(true);
            const comments = await SegevgramApi.getComments(postId);
            setCommentsList(comments.data);
            setLoading(false);
        })();
    }, [postId])

    const SendReply = async (content) => {
        await SegevgramApi.addComment({
            time: Date.now(), author: name.firstName(), avatarUrl: image.avatar(),
            postId: postId, content: content
        })
    }

    return loading ? <Loader size='huge' active/> :
        <div>
            {console.log("list: " + commentsList.length)}
            {commentsList.map(comment =>
                <UserComment author={comment.author} time={comment.time} content={comment.content}
                             avatarUrl={comment.avatarUrl}/>)}
            <Form reply>
                <Form.TextArea onChange={(e) => {
                    setCommentInput(e.target.value)
                }} value={inputComment}/>
                <Button content='Add Reply' labelPosition='left' icon='edit' primary
                        onClick={() => SendReply(inputComment)}/>
            </Form>
        </div>
}

export default Comments;