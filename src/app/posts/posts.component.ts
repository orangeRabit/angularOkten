import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {PostModel} from "../models/postModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    })
  }

  ngOnInit(): void {
  }

}
