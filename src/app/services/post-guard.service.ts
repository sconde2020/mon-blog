import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostService } from "./post.service";

@Injectable()
export class PostGuard implements CanActivate {

    constructor(private postService: PostService,
                private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
        const post = this.postService.getPostById(+route.params['id']); 
        if (post == null) {
            console.log("in the guard");
            return this.router.navigate(['not-found']);
        } else {
            return true;
        }
    }
}