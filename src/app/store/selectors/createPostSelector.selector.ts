import { createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';
import {selectPostSelector} from './post.selector';

export const createPostSuccessSelector = createSelector(selectPostSelector, (state: PostState) => state.createPostResponse);

export const createPostErrorSelector = createSelector(selectPostSelector, (state: PostState) => state.createPostError);