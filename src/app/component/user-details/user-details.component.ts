import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/userModel";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user?: UserModel;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) =>
      this.userService.gerUserById(id).subscribe(value => this.user=value)
    )
  }

  ngOnInit(): void {
  }

  userPosts() {
      console.log('kjfljg')
  }
}
