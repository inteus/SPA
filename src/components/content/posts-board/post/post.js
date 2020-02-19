import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={styles.post}>
                <img src={props.ava} alt="avas" /> {props.message}
            </div>
        </div>
    );
}

export default Post;