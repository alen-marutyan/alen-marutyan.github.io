import React from 'react';
import './PostInformation.css'

const PostInformation = ({title, body}) => {
    return (
        <div className={'PostInformation'}>
            <h2 className='posts-title'>{title}</h2>
            <p className='posts-body'>{body}</p>

        </div>
    );
};

export default PostInformation;
