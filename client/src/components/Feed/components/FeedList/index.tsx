import {
  Avatar,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import Badge from "@/components/Badge"
import CountComment from "@/components/CountComment"
import Delete from "../Delete"
import Edit from "../Edit"
import Empty from "../Empty"
import Highlighter from "react-highlight-words"
import Link from "next/link"
import React from "react"
import { FeedProps } from "../.."
import { PostModel } from "@/app/(board)/feed/types"
import { SearchProps } from "@/components/Search"
import { isEmpty, isFunction } from "lodash"
import { mapCommunity } from "../../constants"
import Loading from "@/components/Loading"

interface FeedListProps
  extends Pick<FeedProps, "data" | "onDelete" | "onUpdate" | "isCreate">,
    Pick<SearchProps, "searchValue"> {
  isLoading?: boolean
}

const FeedList = ({
  data,
  onUpdate,
  onDelete,
  searchValue,
  isLoading,
}: FeedListProps) => {
  if (isLoading) {
    return <Loading />
  }

  if (!data || isEmpty(data)) {
    return <Empty />
  }

  const handlePrevent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
  }

  return (
    <List
      component="ul"
      sx={{ bgcolor: "background.paper" }}
      className="rounded-xl p-0"
    >
      {data.map(({ id, title, detail, community, author, comments }, index) => (
        <div key={id}>
          <ListItem
            className="cursor-pointer"
            component={Link}
            href={`/feed/${id}`}
          >
            <ListItemText>
              <Grid2 container gap={1}>
                <Grid2 container size={12} columnGap="10px">
                  <Grid2>
                    <ListItemAvatar sx={{ minWidth: "unset" }}>
                      <Avatar alt={author} src="/images/avatar/1.png" />
                    </ListItemAvatar>
                  </Grid2>
                  <Grid2 display="flex" alignItems="center" size="grow">
                    <div className="text-[#939494] text-sm font-medium">
                      {author}
                    </div>
                  </Grid2>
                  {isFunction(onUpdate) && (
                    <Grid2 onClick={handlePrevent}>
                      <Edit
                        defaultValues={{
                          id,
                          title,
                          detail,
                          community,
                        }}
                        onUpdate={(values) => onUpdate(values as PostModel)}
                      />
                    </Grid2>
                  )}
                  {isFunction(onDelete) && (
                    <Grid2 onClick={handlePrevent}>
                      <Delete onDelete={() => onDelete(id)} />
                    </Grid2>
                  )}
                </Grid2>
                <Grid2 size={12}>
                  <Badge>{mapCommunity[community]}</Badge>
                </Grid2>
                <Grid2 size={12}>
                  <div className="text-base font-bold">
                    <Highlighter
                      searchWords={[searchValue?.q || ""]}
                      autoEscape={true}
                      textToHighlight={title}
                    />
                  </div>
                </Grid2>
                <Grid2 size={12}>
                  <div className="text-xs line-clamp-2 font-normal">
                    {detail}
                  </div>
                </Grid2>
                <Grid2>
                  <CountComment count={comments?.length} />
                </Grid2>
              </Grid2>
            </ListItemText>
          </ListItem>
          {index < data.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  )
}

export default FeedList
