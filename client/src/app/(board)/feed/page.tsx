"use client"

import React, { useState } from "react"
import Feed from "@/components/Feed"
import Container from "@/components/Container"
import useGetAllPost from "@/core/hooks/useGetAllPost"
import { SearchValueModel } from "@/components/Search/types"

export default function FeedPage() {
  const [searchValue, setSearch] = useState<SearchValueModel | undefined>()

  const { data, isLoading } = useGetAllPost(searchValue)

  return (
    <Container
      sx={{
        bgcolor: "#BBC2C0",
      }}
    >
      <Feed
        data={data}
        searchValue={searchValue}
        setSearch={setSearch}
        isLoading={isLoading}
      />
    </Container>
  )
}
