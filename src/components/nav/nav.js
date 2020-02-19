import React from 'react';
import FriendsContainer from '../friends/friends-container';
import styles from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <NavLink to="/content" activeClassName={styles.linkActive} >Главная</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogues" activeClassName={styles.linkActive}>Диалоги</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={styles.linkActive}>Новости</NavLink>
                </div>
                <div>
                    <NavLink to="/notes" activeClassName={styles.linkActive}>Заметки</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={styles.linkActive}>Пользователи</NavLink>
                </div>
            </nav>
            <div className={styles.fr}>
                <FriendsContainer />
            </div>
        </div>
    );
}

export default Nav;