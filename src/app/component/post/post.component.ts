import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../models/postModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post!: PostModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  postDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }
}
