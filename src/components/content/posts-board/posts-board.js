import React from 'react';
import Post from './post/post';
import styles from '../content.module.css';

const PostBoard = (props) => {

    let postedMessage = props.posts.map(posts =>
        <Post
            ava={posts.ava}
            message={posts.message}
            key={posts.id}
        />);

    let addPost = () => {
        props.addPost();
    }

    let newTextArea = React.createRef();
    let onChangePostArea = () => {
        props.handleOnChange(newTextArea.current.value);
    }

    return (
        <div>
            <div>
                Лента сообщений:
            <div>
                    <textarea
                        onChange={onChangePostArea}
                        ref={newTextArea}
                        value={props.textAreaPost}
                        placeholder="Enter your message here..."
                    />
                </div>
                <div>
                    <button onClick={addPost} className={styles.myButton}>Add</button>
                </div>
                {postedMessage}
            </div>
        </div>
    );
}

export default PostBoard;