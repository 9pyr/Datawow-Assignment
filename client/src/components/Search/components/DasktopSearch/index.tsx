import { Grid2 } from "@mui/material"
import React from "react"
import CreateBlogButton from "@/components/CreateBlogButton"
import SearchInput from "../SearchInput"
import CommunityFilter from "../CommunityFilter"
import { SearchProps } from "../.."

const DesktopSearch = (props: SearchProps) => {
  return (
    <Grid2 container spacing={2} marginY={2}>
      <Grid2 size={7}>
        <SearchInput {...props} />
      </Grid2>
      <Grid2 container size={5}>
        <Grid2 size={6}>
          <CommunityFilter {...props} />
        </Grid2>
        <Grid2 size={6}>
          <CreateBlogButton />
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default DesktopSearch
