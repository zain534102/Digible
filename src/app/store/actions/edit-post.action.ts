import { PostEditResponse, PostEditRequest } from './../../post/models/post';
import { createAction, props } from '@ngrx/store';

export const actionPostEdit = createAction('[Post] Edit post',props<{request: PostEditRequest}>());

export const actionPostEditSuccess = createAction('[Post] Edit post success', props<{response: PostEditResponse}>());

export const actionPostEditFail = createAction('[Post] Edit post fail', props<{error: any}>());
