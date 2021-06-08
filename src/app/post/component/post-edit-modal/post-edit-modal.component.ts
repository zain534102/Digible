import { Post } from './../../models/post';
import { from } from 'rxjs';
import { Component, OnInit , ViewChild} from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-post-edit-modal',
  templateUrl: './post-edit-modal.component.html',
  styleUrls: ['./post-edit-modal.component.scss']
})
export class PostEditModalComponent implements OnInit {
  @ViewChild('postForm', { static: true }) postForm!: NgForm;
  heading!: string;
  post: Post = {};
  postEditData: Subject<Post> = new Subject();
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }
  onSave(): void{
    if (this.postForm.valid) {
      this.postEditData.next(this.post);
      this.modalRef.hide();
    } else {
      const controls = this.postForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

}
