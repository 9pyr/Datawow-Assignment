import { useMutation } from "@tanstack/react-query"
import { updatePostComment } from "@/core/apis/feed"
import { PostQKey } from "./constants"
import { queryClient } from "@/lib/QueryProviderWrapper"

const useUpdatePostComment = () => {
  return useMutation({
    mutationKey: [PostQKey.UpdateComment],
    mutationFn: updatePostComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PostQKey.Read],
      })
    },
  })
}

export default useUpdatePostComment
