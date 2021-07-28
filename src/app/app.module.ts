import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './component/users/users.component';
import { PostsComponent } from './component/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './component/user/user.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import {routes} from "./component/routes/basic.routs";
import { PostComponent } from './component/post/post.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { UserPostsComponent } from './component/user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
