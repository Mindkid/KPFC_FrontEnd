import React, {Fragment} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Comment from './Comment'

export default function Post({ userId, postId, post  }) {

    return (
        <Fragment>
        <Accordion.Item eventKey={userId + "post" + postId}>
            <Accordion.Header>{post.title}</Accordion.Header>
            <Accordion.Body>
                <p>{post.body}</p>
                <hr/>
                <p>Comments:</p>
                {post.postComments.map((comment, index) =>
                    <Comment comment={comment}/>
                )}
            </Accordion.Body>
        </Accordion.Item>
    </Fragment>
    );
}