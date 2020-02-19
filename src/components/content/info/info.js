import React from 'react';
import ProfileStatus from './profile-status';
import styles from './info.module.css';

import Preloader from '../../common/preloader';
import Facebook from '../../../img/social_fb.png';
import Youtube from '../../../img/social_youtube.png';
import Website from '../../../img/social_web.png';

const Info = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.info}>
            <div><ProfileStatus status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} /></div>
            <div>Имя: {props.profile.fullName} </div>
            <div><img src={props.profile.photos.small} alt='' /></div>
            <div>Обо мне: {props.profile.aboutMe} </div>
            <div>{props.profile.lookingForAJob ? <img src='http://icons.iconarchive.com/icons/saviourmachine/chat/32/online-icon.png' alt='' />
                :
                <img src='http://icons.iconarchive.com/icons/saviourmachine/chat/32/online-red-icon.png' alt='' />}</div>
            <div className={styles.social}>
                <div>
                    <a href={`https://${props.profile.contacts.facebook}`}><img src={Facebook} alt='' /></a>
                </div>
                <div>
                    <a href={`https://${props.profile.contacts.website}`}><img src={Website} alt='' /></a>
                </div>
                <div>
                    <a href={`https://${props.profile.contacts.youtube}`}><img src={Youtube} alt='' /></a>
                </div>
            </div>
        </div>
    );
}

export default Info;