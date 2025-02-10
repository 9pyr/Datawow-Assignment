import { useQuery } from "@tanstack/react-query"
import { getAllPost } from "@/core/apis/feed"
import { PostModel } from "@/app/(board)/feed/types"
import { PostQKey } from "./constants"
import { SearchValueModel } from "@/components/Search/types"

const useGetAllPost = (searchValue?: SearchValueModel) => {
  return useQuery<PostModel[]>({
    queryKey: [PostQKey.ReadAll, searchValue?.community],
    queryFn: () => getAllPost(searchValue),
  })
}

export default useGetAllPost
