import { CreateBlogDto } from './create-blog.dto';

export class CreateCommentDto {
  author: string;
  message: string;
  blog: CreateBlogDto;
}
