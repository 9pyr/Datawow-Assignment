import { CommentModel, PostModel } from "@/app/(board)/feed/types"
import apiCaller from "../apiCaller"
import { SearchValueModel } from "@/components/Search/types"

export const getAllPost = async ({
  community,
}: SearchValueModel | undefined = {}) => {
  const { data } = await apiCaller.get("/blogs/all", { params: { community } })
  return data
}

export const getAllPostByUser = async ({
  community,
}: SearchValueModel | undefined = {}) => {
  const { data } = await apiCaller.get(`/blogs`, { params: { community } })
  return data
}

export const getPostById = async (id: string) => {
  const { data } = await apiCaller.get(`/blogs/${id}`)
  return data
}

export const createPost = async (body: PostModel) => {
  const { data } = await apiCaller.post("/blogs", body)
  return data
}

export const updatePost = async ({ id, ...body }: PostModel) => {
  const { data } = await apiCaller.put(`/blogs/${id}`, body)
  return data
}

export const updatePostComment = async ({
  id,
  ...body
}: Partial<CommentModel>) => {
  const { data } = await apiCaller.patch(`/blogs/${id}`, body)
  return data
}

export const deletePost = async (id: string) => {
  await apiCaller.delete(`/blogs/${id}`)
}
