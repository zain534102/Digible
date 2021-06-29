import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditModalComponent } from './component/post-edit-modal/post-edit-modal.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostCreateComponent } from './component/post-create/post-create.component';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { environment } from 'src/environments/environment';
/*Ngrx*/
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from '../store/state/app.state';

import {
  ButtonsModule,
  InputsModule,
  CardsModule,
  InputUtilitiesModule,
  IconsModule
} from 'angular-bootstrap-md';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../store/effects/post.effects';
import {postReducer} from '../store/state/post.state';
@NgModule({
  declarations: [
    PostEditModalComponent,
    PostListComponent,
    PostCreateComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ButtonsModule,
    InputsModule,
    CardsModule,
    InputUtilitiesModule,
    IconsModule,
    StoreModule.forFeature('post', reducers),
    EffectsModule.forFeature([
      PostsEffects,
    ]),
  ],
  exports: [
    PostListComponent,
    PostCreateComponent,
    PostEditModalComponent,
  ],
  providers: [Store]
})
export class PostModule { }
