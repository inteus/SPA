import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className={styles.header}>
            <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/8575147831553750379-256.png" alt="logo" />
            <div className={styles.loginBlock}>
                {props.isLogged ?
                    `Вы вошли как, ${props.login}`
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
}

export default Header;