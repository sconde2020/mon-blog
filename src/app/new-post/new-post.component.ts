import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostData } from '../models/postData.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const title = form.value['titre'];
    const content = form.value['contenu'];
    const postData = new PostData(title, content);
    this.postService.addPost(postData);
    this.router.navigate(['/posts']);
  }
}
