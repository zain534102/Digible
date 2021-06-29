import { ActionReducerMap } from '@ngrx/store';
import { PostState, postReducer } from './post.state';

export const reducers: ActionReducerMap<AppState> = {
    posts: postReducer,
};
export class AppState{
}