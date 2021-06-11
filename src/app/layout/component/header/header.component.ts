import { SubjectService } from './../../../post/services/subject.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchKeyword!: string ;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }
  searchData(): void{
      this.subjectService.setKeyword(this.searchKeyword);
  }
}
