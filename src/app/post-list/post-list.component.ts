import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts!: Post[];
  postSubscription!: Subscription;

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  onSearch(form: NgForm) {
    const searchTerm = form.value['searchTerm'];
    this.postService.findPost(searchTerm);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}


