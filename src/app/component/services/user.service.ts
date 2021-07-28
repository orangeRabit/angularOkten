import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/userModel";
import {PostModel} from "../models/postModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersArr = 'https://jsonplaceholder.typicode.com/users'


  constructor(private httpClient: HttpClient) { }

  getAllUsers() :Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.usersArr)
  }

  gerUserById(id: number) :Observable<UserModel> {
    return  this.httpClient.get<UserModel>(this.usersArr + '/' + id)
  }

  getUserPost(id: number) :Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.usersArr + '/' + id + '/posts')
  }


}
