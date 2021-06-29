import { createSelector } from '@ngrx/store';
import { PostState } from '../state/post.state';
import { selectPostSelector } from './post.selector';

const editPostSuccessSelector = createSelector(selectPostSelector, (state: PostState) => state.editPostResponse);

const editPostFailSelector = createSelector(selectPostSelector, (state: PostState) => state.editPostError);
