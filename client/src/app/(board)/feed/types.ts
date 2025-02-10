export interface PostModel {
  id: string
  title: string
  detail: string
  author: string
  community: string
  createDate: string
  updateDate: string
  comments?: CommentModel[]
}

export interface CommentModel {
  id: string
  author: string
  message: string
  createDate: string
  updateDate: string
}
