import { Post, PostResponse, PosCreatedResponse } from './../models/post';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
    providedIn: 'root'
})
export class PostService {

    private getUrl = environment.REST_HOST + 'posts';
    private createUrl = environment.REST_HOST + 'posts';
    private updateUrl = environment.REST_HOST + 'posts/';
    private deleteUrl = environment.REST_HOST + 'posts/';
    private searchUrl = environment.REST_HOST + 'posts';
    private headers = new HttpHeaders()
        .set('Content-type', 'application/json; charset=UTF-8');
    constructor(
        private http: HttpClient
    ) { }
    public getAllPosts(): Observable<PostResponse> {
        return this.http.get<PostResponse>(this.getUrl);
    }
    public createPost(request: any): Observable<any> {
        return this.http.post(this.createUrl, { headers: this.headers }, request);
    }
    public updatePost(request: any, id: number): Observable<any> {
        return this.http.put(this.updateUrl + id, { headers: this.headers }, request);
    }
    public deletePost(id: number): Observable<any> {
        return this.http.delete(this.deleteUrl + id);
    }
    public searchPost(keyword: string): Observable<any> {
        const params = new HttpParams().set('search', keyword);
        return this.http.get(this.searchUrl, { params });
    }
}
