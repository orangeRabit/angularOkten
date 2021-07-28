import {Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";

export let routes: Routes = [
  {path: 'users', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent, children: [
          {path: ':id', component: UserPostsComponent}
        ]}
    ]} ,
  {path: 'posts', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]}
]
