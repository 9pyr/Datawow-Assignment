import CreateBlogButton from "@/components/CreateBlogButton"
import { SearchProps } from "@/components/Search"
import SearchIcon from "@mui/icons-material/Search"
import { Grid2, IconButton } from "@mui/material"
import { useState } from "react"
import CommunityFilter from "../CommunityFilter"
import SearchInput from "../SearchInput"

const MobileSearch = (props: SearchProps) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid2 container spacing={2} marginY={2}>
      <Grid2 size={isOpen ? 12 : 2}>
        {!isOpen ? (
          <IconButton onClick={handleClick}>
            <SearchIcon />
          </IconButton>
        ) : (
          <SearchInput {...props} onBlur={handleClose} />
        )}
      </Grid2>
      {!isOpen && (
        <Grid2 container size={10}>
          <Grid2 size={6}>
            <CommunityFilter {...props} />
          </Grid2>
          <Grid2 size={6}>
            <CreateBlogButton />
          </Grid2>
        </Grid2>
      )}
    </Grid2>
  )
}

export default MobileSearch
