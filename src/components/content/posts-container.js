import { addPostActionCreator, onChangeTextAreaCreator } from '../../redux/content-reducer';
import PostBoard from './posts-board/posts-board';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.contentPage.posts,
        textAreaPost: state.contentPage.textAreaPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange: (text) => {
            let changeAction = onChangeTextAreaCreator(text);
            dispatch(changeAction);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostBoard);

export default PostsContainer;