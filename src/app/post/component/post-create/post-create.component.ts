import { Post } from './../../models/post';
import { from } from 'rxjs';
import { Component, OnInit , ViewChild} from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  @ViewChild('postForm', { static: true }) postForm!: NgForm;
  heading!: string;
  post: Post = {};
  postData: Subject<Post> = new Subject();
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }
  onSave(): void{
    if (this.postForm.valid) {
      this.postData.next(this.post);
      this.modalRef.hide();
    } else {
      const controls = this.postForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

}
