import { Avatar, Grid2, ListItemAvatar } from "@mui/material"
import React from "react"
import Badge from "@/components/Badge"
import { PostModel } from "@/app/(board)/feed/types"
import dayFormat from "@/utils/dayFormat"
import { mapCommunity } from "@/components/Feed/constants"

const Content = ({
  author,
  community,
  title,
  detail,
  updateDate,
}: Partial<
  Pick<PostModel, "author" | "community" | "detail" | "title" | "updateDate">
>) => {
  return (
    <Grid2 container gap={1}>
      <Grid2 container size={12}>
        <Grid2>
          <ListItemAvatar>
            <Avatar alt={author} src="/images/avatar/1.png" />
          </ListItemAvatar>
        </Grid2>
        <Grid2 container display="flex" alignItems="center" columnGap={1}>
          <Grid2>
            <div className="text-sm font-medium">{author}</div>
          </Grid2>
          {updateDate && (
            <Grid2>
              <div className="text-[#939494] text-xs font-normal">
                {dayFormat(updateDate)}
              </div>
            </Grid2>
          )}
        </Grid2>
      </Grid2>
      {community && (
        <Grid2 size={12}>
          <Badge>{mapCommunity[community]}</Badge>
        </Grid2>
      )}
      <Grid2 size={12}>
        <div className="text-[28px] font-bold">{title}</div>
      </Grid2>
      <Grid2 size={12}>
        <div className="text-xs font-normal">{detail}</div>
      </Grid2>
    </Grid2>
  )
}

export default Content
