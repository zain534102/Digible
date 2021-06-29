import { AppState } from './app.state';

import { Post, PostResponse, PostEditResponse } from './../../post/models/post';
import * as postAction from '../actions';
import { createReducer, on } from '@ngrx/store';

export class PostState{
    posts!: Post[] | null;
    getPostError!: string | null;
    createPostError!: string | null;
    editPostError!: string | null;
    editPostResponse!: PostEditResponse | null;
    createPostResponse!: Post | null;
}

export interface State extends AppState {
    post: PostState;
}
export const intialPostState: PostState = {
    posts: null,
    getPostError: null,
    createPostError: null,
    editPostError: null,
    editPostResponse: null,
    createPostResponse: null,


};
export const postReducer = createReducer(
    intialPostState,
    on(postAction.actionGetPosts, (state) => ({ ...state, posts: null})),
    on(postAction.actionGetPostsSuccess, (state, { response }) => ({ ...state, posts: response })),
    on(postAction.actionGetPostsFailure, (state, { error }) => ({ ...state, getPostError: error })),
    on(postAction.actionCreatePost, (state) => ({ ...state })),
    on(postAction.actionCreatePostSuccess, (state, { response }) => ({ ...state, createPostResponse: response })),
    on(postAction.actionCreatePostFail, (state, { error }) => ({ ...state, createPostError: error })),
    on(postAction.actionPostEditSuccess, (state, { response }) => ({ ...state, editPostResponse: response })),
    on(postAction.actionPostEditFail, (state, { error }) => ({ ...state, editPostError: error })),
);
