import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: any[] = [];
  constructor(private http: HttpClient) { }

  getPosts() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any[]) => this.posts = result);
  }
}
