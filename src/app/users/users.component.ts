import { Component, OnInit } from '@angular/core';
import {UserModel} from "../models/UserModel";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  // Якщо не прописано "| undefined" валить помилку і я незнаю чому...
  users: UserModel[] | undefined;



  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users = value;

    })
  }

  ngOnInit(): void {
  }

}
