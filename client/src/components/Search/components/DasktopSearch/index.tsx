import CreateBlogButton from "@/components/CreateBlogButton"
import { SearchProps } from "@/components/Search"
import { Grid2 } from "@mui/material"
import CommunityFilter from "../CommunityFilter"
import SearchInput from "../SearchInput"

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
