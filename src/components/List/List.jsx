import React from 'react';
import Item from "../Item/Item";
import './List.css'
import {useSelector} from "react-redux";

const List = () => {
    const { posts } = useSelector(state => state.posts);

    return (
        <div className="List">
            {
                posts.map(el=>(
                    <Item key={el.id} id={el.id} title={el.title} body={el.body}/>
                ))
            }
        </div>
    );
};

export default List;
