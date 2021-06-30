import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id!: number;
  @Input() titre!: string;
  @Input() contenu!: string;
  @Input() loveIts!: number;
  @Input() createdAt!: Date;  

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLoveIt() {
    this.postService.loveIt(this.id);  
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.id);
  }

}
