import React from 'react';
import './Comments.css'

const Comments = ({comments}) => {
    return (
        <div className='comments'>
            {
                comments && comments.comments.map((el, index) => (
                    <p key={el.id} className='comments-body'>{index+1}. {el.body}</p>
                ))
            }
        </div>
    );
};

export default Comments;
