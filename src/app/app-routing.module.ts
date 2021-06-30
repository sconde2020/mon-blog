import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
