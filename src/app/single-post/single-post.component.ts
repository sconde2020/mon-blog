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

  id!: number;
  post!: Post;
  postSubscription!: Subscription;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];    
    console.log("post id: " + this.id); 
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => this.post = <Post>posts.find(
        (post) => post.id === this.id
      )
    )
    this.postService.emitPostSubject();
  }

  onLoveIt() {
    this.postService.lovePost(this.id);  
  }

  onDontLoveIt() {
    this.postService.dontLovePost(this.id);  
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
