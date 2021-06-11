import { SubjectService } from './../../services/subject.service';
import { Post, PostResponse } from './../../models/post';
import { PostService } from './../../services/post.service';
import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';
import { PostEditModalComponent } from './../post-edit-modal/post-edit-modal.component';
import { Component, OnInit , ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MDBModalRef, MDBModalService , MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import {PostCreateComponent} from '../post-create/post-create.component';
import { take} from 'rxjs/operators';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  modalRef!: MDBModalRef;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable!: MdbTableDirective;
  posts: any = [];
  previous: any = [];
  modalConfig: { class: string; } = {
    class: 'modal-dialog-centered'
  };
  constructor(
    private modalService: MDBModalService,
    private postService: PostService,
    private cdRef: ChangeDetectorRef,
    private subjectService: SubjectService
    ) { }

  ngOnInit(): void {
    this.subjectService.keyword.subscribe(keyword => {
      console.log(keyword);
        this.searchPost(keyword);
    });
    this.getAllPosts();
  }

  /**
   * Gets all posts
   */
  getAllPosts(): void{
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      this.intiatePagination(posts);
  });
  }
  /**
   * add Post Button Function
   */
  onAddPost(): void {
    this.modalRef = this.modalService.show(PostCreateComponent, this.modalConfig);
    this.modalRef.content.heading = 'Add new Post';
    this.modalRef.content.postData.pipe(take(1)).subscribe((postData: Post) => {
        this.postService.createPost(postData).subscribe(post => {
         this.createPost(postData);
        });
    });

  }
  onEditPost(post: Post): void{
    this.modalRef = this.modalService.show(PostEditModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Edit Post';
    const postCopy = {
      title: post.title || null,
      body: post.body || null,
      userId: post.userId || null,
     };
    this.modalRef.content.post = postCopy;
    this.modalRef.content.postEditData.pipe(take(1)).subscribe((postData: Post) => {
      this.postService.createPost(postData).subscribe(editpost => {
       this.editPost(postData, post);
      });
  });
  }
  /**
   * Delete Post
   * Called due to api bound
   * @param post: Post
   */
  onDeletePost(post: Post): void{
    this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);
    this.modalRef.content.heading = 'Delete Post';
    this.modalRef.content.confirmation.pipe(take(1)).subscribe( (confirmation: boolean) => {
      if (confirmation){
            this.postService.deletePost(post.id!).subscribe(deleted => {
              this.filterPost(post);
              this.intiatePagination(this.posts);
            });
      }
    });
  }
  /**
   * Intiates frontend paginations
   * @param posts: Post
   */
  intiatePagination(posts: any): void{
    this.mdbTable.setDataSource(posts);
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
    this.posts = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }
  /**
   * Function used to elminate deleted id as api does not deletes
   * @param post: Post
   */
  filterPost(post: Post): void{
      this.posts = this.posts.filter( (originalPost: any) => {
        if (originalPost.id !== post.id){
          return originalPost;
        }
      });
  }
  /**
   * create Post
   * Called due to api bound
   * @param postData: Post
   */
  createPost(postData: Post): void{
    postData.id = this.posts[this.posts.length - 1].id + 1;
    this.posts.push(postData);
    this.intiatePagination(this.posts);
  }
  /**
   * edit Post
   * Called due to api bound
   * @param postData: Post
   * @param oldPost: Post
   */
  editPost(postData: Post, oldPost: Post): void{
  this.posts =  this.posts.map((post: Post) => {
    if (post.id === oldPost.id){
      post.title = postData.title;
      post.body = postData.body;
      post.userId = postData.userId;
    }
    return post;
    });
  this.intiatePagination(this.posts);
  }
  /**
   * Search data
   * @param keyword: string
   */
  searchPost(keyword: string): void{
      this.postService.searchPost(keyword).subscribe( res => {
      });
  }
}
