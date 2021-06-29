import { createAction, props } from '@ngrx/store';
import { PostCreateRequest, Post } from 'src/app/post/models/post';

export const actionCreatePost = createAction('[Post] - Create post', props<{request: PostCreateRequest}>());

export const actionCreatePostSuccess = createAction('[Post] - Create post success', props<{response: Post}>());

export const actionCreatePostFail = createAction('[Post] - Create post failure', props<{error: any}>());
