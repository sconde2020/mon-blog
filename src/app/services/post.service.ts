import { Post } from "../models/post.model";

export class PostService {
    
    posts!: Post[];

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

    loveIt(index: number) {
        this.posts[index].loveIts++;
    }

    dontLoveIt(index: number) {
        this.posts[index].loveIts--;
    }

  
}