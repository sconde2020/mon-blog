import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'

import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  post!: Post;
  postSubscription!: Subscription;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const index = +this.route.snapshot.params['id'];     
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => this.post = <Post>posts.find(post => post.id === index)
    )
    this.postService.emitPostSubject();
  }

  onLoveIt() {
    this.postService.loveIt(this.post.id);  
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.post.id);  
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
