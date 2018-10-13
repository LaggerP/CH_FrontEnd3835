import {createStore} from 'redux';
import axios from 'axios';

const initialState = {
    posts: [],
}

const rootReducer = function(state=initialState, action){
    switch(action.type){
        case 'DELETE_ALL_POSTS':
            state.posts = [];
            break;

        case 'PIN_POSTS':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return { ...post, ...action.pinPost}
                }
                return post
            })
            break;

        case 'FAVORITE_POSTS':
             state.posts = state.posts.map(post => {
                 if (post.id === action.postId) {
                     return { ...post,
                         ...action.comment
                     }
                 }
                 return post
             })
             break;

        case 'SHARE_POSTS':
            
            break;

        case 'COMMENT_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return { ...post, ...action.comment}
                }
                return post
            })
            break;

        case 'LIKE_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return post.likes++
                }
                return post
            })
            break;
        
        case 'DISLIKE_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return post.likes--
                }
                return post
            })
            break;

        case 'GET_POSTS':
            axios.get(state.post)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            break;

        case 'ADD_POSTS':
            state.posts = state.posts.concat(action.post)
            break;

        case 'UPDATE_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return {...post, ...action.post}
                }
                return post
            })
            break;

        case 'FIND_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    return post
                }
                return post
            })
            break;

        case 'DELETE_POST':
            state.posts = state.posts.map(post => {
                if (post.id === action.postId) {
                    post = []
                }
                return post;
            })
            break;
         default: return state;
    }    
    return state;
}
const store = createStore(rootReducer);


export default store;