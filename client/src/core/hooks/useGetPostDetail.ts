import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { getPostById } from "@/core/apis/feed"
import { PostModel } from "@/app/(board)/feed/types"
import { PostQKey } from "./constants"

const useGetPostDetail = () => {
  const { id } = useParams()

  return useQuery<PostModel>({
    queryKey: [PostQKey.Read, id],
    queryFn: () => getPostById(id as string),
  })
}

export default useGetPostDetail
