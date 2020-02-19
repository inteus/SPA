import React, { useState } from 'react';
import styles from './users.module.css';
import userPhoto from '../../img/icon_blue.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagination = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagination; i++) {
        pages.push(i);
    }

    let pagesBlocksCount = Math.ceil(pagination / props.pagesBlockSize);
    let [currPagesBlock, setCurrPagesBlock] = useState(1);
    let leftBoundary = (currPagesBlock - 1) * props.pagesBlockSize + 1;
    let rightBoundary = currPagesBlock * props.pagesBlockSize;

    return (
        <div className={styles.users}>
            {/* pagination block start */}
            <div className={styles.pagination}>
                <span className={styles.itemPage} onClick={() => { setCurrPagesBlock(1) }}>&laquo; Нач</span>
                {
                    currPagesBlock === 1
                        ?
                        <span className={styles.itemPage} style={{ cursor: 'not-allowed' }} >&laquo;</span>
                        :
                        <span className={styles.itemPage} onClick={() => { setCurrPagesBlock(currPagesBlock - 1) }}>&laquo;</span>
                }
                {pages
                    .filter(page => page >= leftBoundary && page <= rightBoundary)
                    .map(page => {
                        return (
                            <div>
                                <span className={props.currentPage === page ? styles.paginationSelect : styles.pagination}
                                    onClick={() => { props.onPageChanged(page) }}>
                                    {page}
                                </span>
                            </div>
                        );

                    })}
                {/* ! refactor ! */}
                {
                    currPagesBlock === pagesBlocksCount ?
                        null
                        :
                        pagesBlocksCount > currPagesBlock &&
                        <span className={styles.itemPage} onClick={() => { setCurrPagesBlock(currPagesBlock + 1) }}>&raquo;</span>
                }
                <span className={styles.itemPage} onClick={() => { setCurrPagesBlock(pagesBlocksCount) }}>Кон &raquo;</span>
                {/* ! refactor ! */}

            </div>
            {/* pagination block end */}

            {/* user list block start */}
            {props.users.map(user =>
                <div className={styles.userItemWrapper} key={user.id}>

                    <div>
                        <NavLink to={'/content/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt='' />
                        </NavLink>
                    </div>

                    <div className={styles.userRightBlockWrapper}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button
                                    disabled={props.buttonInProgress.some(id => id === user.id)}
                                    onClick={() => { props.unfollowUserThunkCreator(user.id) }
                                    }>Unfollow</button>
                                :
                                <button
                                    disabled={props.buttonInProgress.some(id => id === user.id)}
                                    onClick={() => { props.followUserThunkCreator(user.id) }
                                    }>Follow</button>
                            }
                        </div>
                    </div>
                </div>)}
            {/* user list block end */}
        </div>
    );
}

export default Users;