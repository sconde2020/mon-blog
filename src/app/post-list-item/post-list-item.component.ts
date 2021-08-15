import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id!: number;
  @Input() postTitle!: string;
  @Input() content!: string;
  @Input() loveIt!: number;
  @Input() createdAt!: Date;  
  @Input() updatedAt!: Date;  

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLoveIt() {
    this.postService.lovePost(this.id);  
  }

  onDontLoveIt() {
    this.postService.dontLovePost(this.id);
  }

  onRemoveIt() {
    this.postService.removePost(this.id);
  }
}
