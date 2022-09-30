import React, {useState} from 'react';
import './Item.css'
import {Link} from "react-router-dom";

const Item = ({title, id}) => {
    const [change, setChange] = useState(false);

    return (
        <div onClick={() => {
            setChange(true);
        }} className={"Item"}>
            {
                (change)? <Link to={'/posts/'+id} >{title}</Link> : <h2>{title}</h2>
            }
        </div>
    );
};

export default Item;
