"use client"

import { Grid2, IconButton } from "@mui/material"
import React from "react"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import Content from "../Content"
import CountComment from "@/components/CountComment"
import Comments from "../Comments"
import Link from "next/link"
import useGetPostDetail from "@/core/hooks/useGetPostDetail"
import useUpdatePostComment from "@/core/hooks/useUpdatePostComment"
import { FieldValues } from "react-hook-form"

const PostDetail = () => {
  const { data } = useGetPostDetail()
  const { id, author, community, title, detail, comments, updateDate } =
    data || {}

  const { mutateAsync } = useUpdatePostComment()

  const handleAddComment = (values: FieldValues) => {
    mutateAsync({
      id,
      message: values.message,
      author,
    })
  }

  return (
    <Grid2 container rowGap={3}>
      <Grid2 size={12}>
        <IconButton
          sx={{
            bgcolor: "primary.light",
            color: "primary.dark",
          }}
          LinkComponent={Link}
          href="/feed"
        >
          <ArrowBackRoundedIcon />
        </IconButton>
      </Grid2>
      <Content
        author={author}
        community={community}
        title={title}
        detail={detail}
        updateDate={updateDate}
      />
      <Grid2 size={12}>
        <CountComment count={comments?.length} />
      </Grid2>
      <Grid2 size={12}>
        <Comments comments={comments} addComment={handleAddComment} />
      </Grid2>
    </Grid2>
  )
}

export default PostDetail
