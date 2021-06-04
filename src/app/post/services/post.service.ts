import { Post,PostResponse,PosCreatedResponse } from './../models/post';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PostService{

    private getUrl = environment.REST_HOST + 'posts';
    private createUrl = environment.REST_HOST + 'posts';
    private headers = new HttpHeaders()
            .set('Content-type', 'application/json; charset=UTF-8');
    constructor(
        private http: HttpClient
      ) { }
        protected getAllPosts(): Observable <PostResponse>{
            return this.http.get<PostResponse>(this.getUrl);
        }
        protected createPost(request: any): Observable<any>{
            return this.http.post(this.createUrl, {headers: this.headers}, request);
        }
}