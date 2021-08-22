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

    emitPostSubject() {
        this.postSubject.next(this.posts.slice());
    }

    getPosts() {        
        this.httpClient
            .get<any[]>(this.BACKEND_URL)
            .subscribe(
                (response) => this.posts = response,
                (error) => console.log("Error at the fetching posts")
            )
    }

    addPost(postData: PostData) {   
        this.httpClient
            .post(this.BACKEND_URL, postData)
            .subscribe(
                (response) => {
                    console.log('Post created successfully!');
                    this.posts.push(<Post>response);
                    this.emitPostSubject();
                },
                (error) => console.log('Error when creation post: ' + error)
            );
    }

    updatePost() {
        // this.httpClient
        //     .put(this.BACKEND_URL, this.posts)
        //     .subscribe(
        //         () => console.log('Post updated successfully!'),
        //         (error) => console.log('Error when updating post: ' + error)
        //     );
        // this.emitPostSubject();
    }

    removePost(id: number) {
        // this.httpClient
        //  .delete<Post>(this.BACKEND_URL + '/' + id)
        //  .subscribe(
        //     () =>  { 
        //         console.log('Post deleted successfully!'); 
        //         this.emitPostSubject();
        //     },
        //     (error) => console.log('Error when deleting post: ' + error)
        //  );
    }

    getPostById(id: number) : Post {
        return <Post>this.posts.find( post => post.id == id );      
    }

    lovePost(id: number) { 
        this.getPostById(id).loveIt++;
        this.emitPostSubject();
    }

    dontLovePost(id: number) {
        this.getPostById(id).loveIt--;
        this.emitPostSubject();
    }

    getPostByIdOnServer(id: number) {
        console.log("url: " + this.BACKEND_URL + '/' + id);
        let post = new Post();
        this.httpClient
         .get<Post>(this.BACKEND_URL + '/' + id)
         .subscribe(
           (response) => { post = response; console.log("title: " + post.title);},
           (error) =>  console.log('Error when fetching the post : ' + error)
         );    
        return post;
    }
}
