import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {

    private readonly BACKEND_URL = 'https://web-with-angular.firebaseio.com/posts.json';
    private posts = new Array<Post>();
    postSubject = new Subject<Post[]>();

    constructor(private httpClient: HttpClient) {
     //  const post = new Post("Mon premier post")
       //this.posts.push(post);    
       
     //  const post2 = new Post("Mon deuxième post")
       //this.posts.push(post2);    

      this.getPosts();
    }

    emitPostSubject() {
      this.getPosts();
      this.postSubject.next(this.posts.slice());
    }

    lovePost(index: number) {
        // const post = this.getSinglePost(index);
        // post.loveIts++;
        // this.updatePost(post);        
    }

    dontLovePost(index: number) {
        // const post = this.getSinglePost(index);
        // post.loveIts--;
        // this.updatePost(post);       
    }



    // getSinglePost(id: number) : Post {
    //     let post = new Post();
    //     this.httpClient
    //      .get<Post>(this.BACKEND_URL + '/' + id)
    //      .subscribe(
    //        (response) => post = response,
    //        (error) =>  console.log('Error when fetching the post : ' + error)
    //      );    
    //     return post;   
    // }

    addPost(post: Post) {
         this.posts.push(post);
         this.httpClient
        .put(this.BACKEND_URL, this.posts)
          .subscribe(
            (response) =>  { 
                 console.log('Post created successfully!');                 
           },
           (error) => console.log('Error when creation post: ' + error)
       );
      this.emitPostSubject();
    }

    // updatePost(post: Post) {
    //     this.httpClient
    //      .put<Post>(this.BACKEND_URL, post)
    //      .subscribe(
    //         () =>  { 
    //             console.log('Post updated successfully!'); 
    //             this.emitPostSubject();
    //         },
    //         (error) => console.log('Error when updating post: ' + error)
    //      );
    // }

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

    getPosts() {
        this.httpClient
         .get<any[]>(this.BACKEND_URL)
         .subscribe(
             (response) => this.posts = response,
             (error) => console.log("Error at the fetching posts")
         )
    }

    savePosts() {
        this.httpClient
         .put(this.BACKEND_URL, this.posts)
         .subscribe(
             () => { 
                console.log('Enregistrement terminé');
             },
             (error) => console.log("Erreur d'enregistrement: " + error)
         );
    }
}
