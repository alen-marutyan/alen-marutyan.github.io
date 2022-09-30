import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import './Post.css'
import {getCommentsById, getPostById} from "../../store/Actions/postsActions";
import PostInformation from "../../components/postInformation/PostInformation";
import Comments from "../../components/Comments/Comments";
import Loading from "../../components/Loading/Loading";


const Post = () => {
    const {id} = useParams();
    const { comments, post } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPostById(id));
        dispatch(getCommentsById(id));
    },[dispatch, id])



    return (
        <div className='Post'>
            <h2 className='posts-name'>Post</h2>

            {
                (post) ? <PostInformation title={post.title} body={post.body}/> : <Loading/>
            }

            <h2 className='comments-name'>Comments</h2>
            {
                (comments)? <Comments comments={comments}/> : <Loading/>
            }
        </div>
    );
};

export default Post;
