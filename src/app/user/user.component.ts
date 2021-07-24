import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../models/UserModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  // Б'є помилку якщо не поставити знак оклику після user

  @Input()
  user!: UserModel;

  constructor() {

  }

  ngOnInit(): void {
  }

}
