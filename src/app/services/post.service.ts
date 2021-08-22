import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";
import { PostData } from "../models/postData.model";


@Injectable()
export class PostService {

    private readonly BACKEND_URL = 'http://localhost:9292/soul-blog/posts';

    private posts = new Array<Post>();
    public postSubject = new Subject<Post[]>();

    constructor(private httpClient: HttpClient) {
        this.getPosts();
    }

    async emitPostSubject() {       
        this.postSubject.next(this.posts.slice());
    }

    getPosts() {        
        this.httpClient
            .get<any[]>(this.BACKEND_URL)
            .subscribe(
                (response) => { 
                    console.log('Post retrieved successfully!');
                    this.posts = response;
                    this.emitPostSubject();
                },
                (error) => console.log("Error at the fetching posts")
            )       
    }

    addPost(postData: PostData) {   
        this.httpClient
            .post(this.BACKEND_URL, postData)
            .subscribe(
                (response) => {
                    console.log('Post created successfully!');
                    this.getPosts();
                },
                (error) => console.log('Error when creation post: ' + error)
            );
    }

    updatePost(post: Post) {
        this.httpClient
            .put(this.BACKEND_URL, post)
            .subscribe(
                () => {
                    console.log('Post updated successfully!');
                    this.getPosts();
                },
                (error) => console.log('Error when updating post: ' + error)
            );
    }

    removePost(id: number) {
        this.httpClient
         .delete<Post>(this.BACKEND_URL, { params : { 'id' : id } } )
         .subscribe(
            () =>  { 
                console.log('Post deleted successfully!'); 
                this.getPosts();
            },
            (error) => console.log('Error when deleting post: ' + error)
         );
    }
 
    lovePost(post: Post) {         
        post.loveIt++;
        this.updatePost(post);
    }

    dontLovePost(post: Post) {
        post.loveIt--;
        this.updatePost(post);
    }  
}
