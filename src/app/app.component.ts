import { Component } from '@angular/core';
import { Post } from './model/Post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  posts = new Array();

  constructor() {
    const post1 = new Post();
    post1.titre = 'Mon premier post';
    this.posts.push(post1);

    const post2 = new Post();
    post2.titre = 'Mon deuxième post';
    this.posts.push(post2);

    const post3 = new Post();
    post3.titre = 'Encore un autre post';
    this.posts.push(post3);
  }

}
