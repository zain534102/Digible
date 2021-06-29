import { Post, PostResponse } from './../../post/models/post';
import { PostService } from './../../post/services/post.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromStore from '../actions';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Injectable()
export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postservice: PostService,
        private store$: Store
    ) {
    }

    private getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromStore.actionGetPosts),
            concatMap(_ => {
                return this.postservice.getAllPosts().pipe(
                    map(response => fromStore.actionGetPostsSuccess({ response: response as Post[] })),
                    catchError(error => of(fromStore.actionGetPostsFailure({ error })))
                );
            })
        )
    )
}