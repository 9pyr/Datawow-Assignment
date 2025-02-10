import { CreateCommentDto } from './create-comment.dto';

export class CreateBlogDto {
  title: string;
  detail: string;
  author: string;
  community: string;
  comment?: CreateCommentDto[];
}
