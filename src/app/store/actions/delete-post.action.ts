import { createAction, props } from '@ngrx/store';

export const actionDeletePost = createAction('[Post] . Delete post');

export const actionDeletePostSuccess = createAction('[Post] . Delete Post success');

export const actionDeletePostFail = createAction('[Post] . Delete post failure', props<{error: any}>());
