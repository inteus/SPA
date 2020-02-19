import React from 'react';
import Friend from './friend';
import styles from './friends.module.css';

const Friends = (props) => {

    let friendsList = props.friends.map(friends => <Friend name={friends.name} ava={friends.ava} key={friends.id}/>
    );

    return (
        <div className={styles.friendsWrapper}>
            <div>
                Отслеживаемые:
            </div>
            <div className={styles.frList}>
                {friendsList}
            </div>
        </div>
    );

}

export default Friends;