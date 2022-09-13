import {Comment} from "../../core/models/comment.model";

export interface Post {
  id: number;
  userId: number;
  title: string;
  createdDate: Date;
  imageUrl: string;
  content: string;
  comments: Comment[];
}
