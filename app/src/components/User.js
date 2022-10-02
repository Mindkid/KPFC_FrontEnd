import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Post from './Post'

export default function User({ user, id }) {

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{user.name}  "{user.email}"  Posts</Accordion.Header>
            <Accordion.Body>
                <Accordion >
                    {user.userPosts.map((post, index) => (
                       <Post userId={id} postId={index} post={post} />
                    ))}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    );
}