import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditModalComponent } from './component/post-edit-modal/post-edit-modal.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostCreateComponent } from './component/post-create/post-create.component';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    PostEditModalComponent,
    PostListComponent,
    PostCreateComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports:[
    PostListComponent,
    PostCreateComponent,
    PostEditModalComponent
  ]
})
export class PostModule { }
