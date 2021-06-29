import { createSelector } from '@ngrx/store';
import { selectPostSelector } from './post.selector';
import { PostState } from '../state/post.state';

export const getPostsSuccessSelector = createSelector(selectPostSelector, (state: PostState) => state.posts);

export const getPostErrorSelector = createSelector(selectPostSelector, (state: PostState) => state.getPostError);

