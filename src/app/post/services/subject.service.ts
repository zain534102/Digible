import { Post, PostResponse, PosCreatedResponse } from './../models/post';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    keyword: Subject<string> = new Subject();
    setKeyword(keyword: string): void{
        this.keyword.next(keyword);
    }
}