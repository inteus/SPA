import React from 'react';
import styles from './friends.module.css';

const Friend = (props) => {
    return (
        <div>
        <div className={styles.friends}>
            {props.name}
        </div>

        </div>
    );
}

export default Friend;