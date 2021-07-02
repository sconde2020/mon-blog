import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { PostGuard } from './services/post-guard.service';

const routes: Routes = [
  { path: 'posts', canActivate: [AuthGuard], component: PostListComponent },
  { path: 'posts/:id', canActivate: [AuthGuard, PostGuard],component: SinglePostComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
