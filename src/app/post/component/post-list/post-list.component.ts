import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';
import { PostEditModalComponent } from './../post-edit-modal/post-edit-modal.component';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {PostCreateComponent} from '../post-create/post-create.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  modalRef!: MDBModalRef;
  modalConfig: { class: string; } = {
    class: 'modal-dialog-centered'
  };
  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }
  onAddUser(): void {
    this.modalRef = this.modalService.show(PostCreateComponent, this.modalConfig);

    this.modalRef.content.heading = 'Add new Post';
  }
  onEditUser(){
    this.modalRef = this.modalService.show(PostEditModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Edit Post';
  }
  onDeletePost(){
    this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Delete Post';
  }

}
