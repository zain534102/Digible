import { Post, PostResponse } from './../../models/post';
import { PostService } from './../../services/post.service';
import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';
import { PostEditModalComponent } from './../post-edit-modal/post-edit-modal.component';
import { Component, OnInit , ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MDBModalRef, MDBModalService , MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import {PostCreateComponent} from '../post-create/post-create.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  modalRef!: MDBModalRef;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable!: MdbTableDirective;
  posts!: any;
  previous: any = [];
  modalConfig: { class: string; } = {
    class: 'modal-dialog-centered'
  };
  constructor(
    private modalService: MDBModalService,
    private postService: PostService,
    private cdRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(posts => {
          this.posts = posts;
          this.intiatePagination(posts);
      });
  }
  onAddUser(): void {
    this.modalRef = this.modalService.show(PostCreateComponent, this.modalConfig);

    this.modalRef.content.heading = 'Add new Post';
  }
  onEditUser(): void{
    this.modalRef = this.modalService.show(PostEditModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Edit Post';
  }
  onDeletePost(): void{
    this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Delete Post';
  }
  intiatePagination(posts: any): void{
    this.mdbTable.setDataSource(this.posts);
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
    this.posts = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }


}
