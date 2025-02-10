import { useQuery } from "@tanstack/react-query"
import { getAllPostByUser } from "@/core/apis/feed"
import { PostModel } from "@/app/(board)/feed/types"
import { PostQKey } from "./constants"
import { SearchValueModel } from "@/components/Search/types"

const useGetAllPostByUser = (searchValue?: SearchValueModel) => {
  return useQuery<PostModel[]>({
    queryKey: [PostQKey.ReadAllByUser, searchValue?.community],
    queryFn: () => getAllPostByUser(searchValue),
  })
}

export default useGetAllPostByUser
