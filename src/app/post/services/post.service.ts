import { Post,PostResponse } from './../models/post';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PostService{
    
    private getUrl = environment.REST_HOST+'posts';
    private createUrl = environment.REST_HOST+'posts';
    constructor(
        private http: HttpClient
      ) { }
        protected getAllPosts():Observable<PostResponse>{
            return this.http.get<PostResponse>(this.getUrl);
        }
        protected createPost()
}