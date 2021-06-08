import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  confirmation: Subject<boolean> = new Subject();
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }
  onDelete(): void {
    this.confirmation.next(true);
    this.modalRef.hide();
  }
}
