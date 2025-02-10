"use client"

import React from "react"
import dynamic from "next/dynamic"
import { PostModel } from "@/app/(board)/feed/types"
import { UseMutateAsyncFunction } from "@tanstack/react-query"
import FeedList from "./components/FeedList"
import { SearchProps } from "@/components/Search"

const Search = dynamic(() => import("@/components/Search"), { ssr: false })

export interface FeedProps extends SearchProps {
  data?: PostModel[]
  isCreate?: boolean
  onUpdate?: UseMutateAsyncFunction<void, Error, PostModel, unknown>
  onDelete?: UseMutateAsyncFunction<void, Error, string, unknown>
  isLoading?: boolean
}

const Feed = ({
  data,
  isCreate,
  onUpdate,
  onDelete,
  searchValue,
  setSearch,
  isLoading,
}: FeedProps) => {
  return (
    <>
      <Search searchValue={searchValue} setSearch={setSearch} />
      <FeedList
        data={data}
        onUpdate={onUpdate}
        onDelete={onDelete}
        isCreate={isCreate}
        searchValue={searchValue}
        isLoading={isLoading}
      />
    </>
  )
}

export default Feed
