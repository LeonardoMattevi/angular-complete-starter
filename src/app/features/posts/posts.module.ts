import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
