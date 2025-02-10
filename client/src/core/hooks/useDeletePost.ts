import { useMutation } from "@tanstack/react-query"
import { deletePost } from "@/core/apis/feed"
import { PostQKey } from "./constants"
import { queryClient } from "@/lib/QueryProviderWrapper"

const useDeletePost = () => {
  return useMutation({
    mutationKey: [PostQKey.Delete],
    mutationFn: deletePost,
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

export default useDeletePost
