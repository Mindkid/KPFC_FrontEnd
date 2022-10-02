import React, {Fragment} from 'react';

export default function Comment({ comment }) {

    return (
        <Fragment>
            <h5 className='commentTitle'>{comment.title}</h5>
            <p>{comment.body}</p>
        </Fragment>
    );
}