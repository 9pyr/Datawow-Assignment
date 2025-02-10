import { useMutation } from "@tanstack/react-query"
import { updatePost } from "@/core/apis/feed"
import { PostQKey } from "./constants"
import { queryClient } from "@/lib/QueryProviderWrapper"

const useUpdatePost = () => {
  return useMutation({
    mutationKey: [PostQKey.Update],
    mutationFn: updatePost,
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

export default useUpdatePost
