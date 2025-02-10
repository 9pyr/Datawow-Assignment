"use client"

import React, { useState } from "react"
import Container from "@/components/Container"
import Feed from "@/components/Feed"
import useGetAllPostByUser from "@/core/hooks/useGetAllPostByUser"
import useDeletePost from "@/core/hooks/useDeletePost"
import useUpdatePost from "@/core/hooks/useUpdatePost"
import { SearchValueModel } from "@/components/Search/types"

export default function BlogPage() {
  const [searchValue, setSearch] = useState<SearchValueModel | undefined>()

  const { data, isLoading } = useGetAllPostByUser(searchValue)

  const { mutateAsync: onDelete } = useDeletePost()

  const { mutateAsync: onUpdate } = useUpdatePost()

  return (
    <Container
      sx={{
        bgcolor: "#BBC2C0",
      }}
    >
      <Feed
        data={data}
        isCreate
        onUpdate={onUpdate}
        onDelete={onDelete}
        searchValue={searchValue}
        setSearch={setSearch}
        isLoading={isLoading}
      />
    </Container>
  )
}
