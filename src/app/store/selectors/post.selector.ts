import {  State, PostState } from './../state/post.state';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
export const  selectPostSelector = createFeatureSelector<State, PostState>('post');
