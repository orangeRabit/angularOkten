import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {PostModel} from "../models/postModel";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userPost?: PostModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) =>
      this.userService.getUserPost(id).subscribe(value => console.log(value))
    )
  }

  ngOnInit(): void {
  }

}
