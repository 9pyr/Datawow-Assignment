import React, { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { ListItemIcon, Typography } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import { communityOptions } from "@/components/Feed/constants"
import { SearchProps } from "@/components/Search"

const CommunityFilter = ({ searchValue, setSearch }: SearchProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          "&:not(:hover)": {
            color: "#000",
            bgcolor: "transparent",
          },
        }}
        fullWidth
      >
        Community
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {communityOptions.map(({ label, value }, index) => {
          const selected = value === searchValue?.community
          return (
            <MenuItem
              key={`${value}:${index}`}
              onClick={() => {
                setSearch({ ...searchValue, community: value })
              }}
              sx={{ minWidth: "300px" }}
              selected={selected}
            >
              <Typography className="w-full">{label}</Typography>
              {selected && (
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
              )}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default CommunityFilter
