import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
@Component({
  selector: 'app-post-edit-modal',
  templateUrl: './post-edit-modal.component.html',
  styleUrls: ['./post-edit-modal.component.scss']
})
export class PostEditModalComponent implements OnInit {
  heading!: string;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
