import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
/*
  { 
    "id": 1, 
    "userId": 1, 
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", 
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" 
  }
*/
@Component({
  selector: 'jlm-posts',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of postsService.posts">
          id: {{item.id}} - userId: {{item.userId}}
          <h3>{{item.title}}</h3>
          <div>{{item.body}}</div>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(public postsService: PostsService) {
    postsService.getPosts();
  }

  ngOnInit() {
  }

}
