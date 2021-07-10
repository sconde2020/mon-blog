import { Subject } from "rxjs";
import { Post } from "../models/post.model";

export class PostService {
    
    private posts!: Post[];
    postSubject = new Subject<Post[]>();

    constructor() {
        this.posts = new Array<Post>();

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

    emitPostSubject() {
      this.postSubject.next(this.posts.slice());
    }

    lovePost(index: number) {
        this.posts[index].loveIts++;
        this.emitPostSubject();
    }

    dontLovePost(index: number) {
        this.posts[index].loveIts--;
        this.emitPostSubject();
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.emitPostSubject();
    }

    removePost(index: number) {
        this.posts.splice(index, 1);
        this.emitPostSubject();
    }
}