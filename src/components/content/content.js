import React from 'react';
import PostsContainer from './posts-container';
import Info from './info/info';

const Content = (props) => {

    return (
        <div>
            <div>
                <Info profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} />
            </div>
            <PostsContainer store={props.store} />
        </div>
    );
}

export default Content;