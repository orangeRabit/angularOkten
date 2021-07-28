import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {UserModel} from "../models/userModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users?: UserModel[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users=value)
  }

}
