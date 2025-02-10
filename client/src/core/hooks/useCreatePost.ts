import { useMutation } from "@tanstack/react-query"
import { createPost } from "@/core/apis/feed"
import { queryClient } from "@/lib/QueryProviderWrapper"
import { PostQKey } from "./constants"

const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PostQKey.ReadAllByUser],
      })
      queryClient.invalidateQueries({
        queryKey: [PostQKey.ReadAll],
      })
    },
  })
}

export default useCreatePost
