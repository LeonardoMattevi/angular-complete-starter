import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: PostsService
})
export class PostsService {
  posts = [];
  constructor(private http: HttpClient) { }

  getPosts() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(result => this.posts = result);
  }
}
