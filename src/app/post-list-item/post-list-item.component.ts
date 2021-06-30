import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() titre = '';
  @Input() contenu = '';
  @Input() loveIts = 0;
  @Input() createdAt = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  loveIt() {
    this.loveIts++;
  }

  dontLoveIt() {
    this.loveIts--;
  }

}
