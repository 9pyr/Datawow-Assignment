import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { omit } from 'lodash';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAll(community: string) {
    return this.blogRepository.find({
      where: { community },
      order: {
        createDate: 'DESC',
      },
      relations: ['comments'],
    });
  }

  findAllPostByUser(username: string, community: string) {
    return this.blogRepository.find({
      where: {
        author: username,
        community,
      },
      order: { createDate: 'DESC' },
      relations: ['comments'],
    });
  }

  findOne(id: string) {
    return this.blogRepository.findOne({
      where: { id },
      order: {
        comments: {
          updateDate: 'DESC',
        },
      },
      relations: ['comments'],
    });
  }

  async create(createBlogDto: CreateBlogDto, username: string) {
    const blog = this.blogRepository.create({
      ...createBlogDto,
      author: username,
    });
    return this.blogRepository.save(blog);
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogRepository.update({ id }, omit(updateBlogDto, ['author']));
  }

  async updateComment(
    id: string,
    username: string,
    createCommentDto: CreateCommentDto,
  ) {
    const blog = await this.blogRepository.findOneBy({ id });

    if (!blog) {
      throw new Error('Blog not found');
    }

    const comment = new Comment();

    comment.author = username;
    comment.message = createCommentDto.message;
    comment.blog = blog;

    return this.commentRepository.save(comment);
  }

  remove(id: string) {
    return this.blogRepository.delete(id);
  }
}
