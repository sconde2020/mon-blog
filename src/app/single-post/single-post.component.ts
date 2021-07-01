import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  id!: number;
  titre!: string;
  contenu!: string;
  loveIts!: number;
  createdAt!: Date; 

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.titre = this.postService.getPostById(+this.id).titre;
    this.contenu = this.postService.getPostById(+this.id).contenu;
    this.loveIts = this.postService.getPostById(+this.id).loveIts;
    this.createdAt = this.postService.getPostById(+this.id).createdAt;
  }

  onLoveIt() {
    this.postService.loveIt(+this.id);  
    this.loveIts = this.postService.getPostById(+this.id).loveIts;
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(+this.id);
    this.loveIts = this.postService.getPostById(+this.id).loveIts;
  }


}
