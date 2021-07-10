import { Subject } from "rxjs";
import { Post } from "../models/post.model";

export class PostService {
    
    private posts = new Array<Post>();
    postSubject = new Subject<Post[]>();

    constructor() {
        const post1 = new Post('Mon premier post');
        this.posts.push(post1);
        
        const post2 = new Post('Mon deuxième post');
        this.posts.push(post2);

        const post3 = new Post('Mon troisième post');
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