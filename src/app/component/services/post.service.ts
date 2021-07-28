import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../models/postModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsArr = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getAllPosts() :Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.postsArr)
  }

  getPostById(id: number) :Observable<PostModel> {
    return this.httpClient.get<PostModel>(this.postsArr + '/' + id)
  }
}
