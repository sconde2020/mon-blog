import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  posts!: Post[];

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}
