import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Put,
  Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('all')
  findAllPost(@Query('community') community: string) {
    return this.blogsService.findAll(community);
  }

  @Get()
  findAllPostByUser(
    @Headers('username') username: string,
    @Query('community') community: string,
  ) {
    return this.blogsService.findAllPostByUser(username, community);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
  }

  @Post()
  create(
    @Body() createBlogDto: CreateBlogDto,
    @Headers('username') username: string,
  ) {
    return this.blogsService.create(createBlogDto, username);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Patch(':id')
  updateComment(
    @Headers('username') username: string,
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.blogsService.updateComment(id, username, createCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(id);
  }
}
