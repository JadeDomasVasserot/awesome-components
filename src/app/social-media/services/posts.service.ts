import {Injectable} from "@angular/core";
import {Post} from "../models/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
//provideIn root lazyload ne sert que dans socialMedia
import {environment} from '../../../environments/environment';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  addNewComment(postCommented: { comment: string, postId: number }) {
    console.log(postCommented);
  }
}
