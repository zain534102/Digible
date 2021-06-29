import { createAction, props } from '@ngrx/store';
import { Post, PostResponse } from 'src/app/post/models/post';

export const actionGetPosts = createAction('[Post] - Get Post');

export const actionGetPostsSuccess = createAction('[Post] - Get Post success', props<{ response: Post[] }>());

export const actionGetPostsFailure = createAction('[Post] - Get Post failure', props<{error: any}>());
