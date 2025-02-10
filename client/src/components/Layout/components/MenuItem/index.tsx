import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import Link from "next/link"
import React from "react"
import { MenuModel } from "../../types"
import { usePathname } from "next/navigation"

const MenuItem = ({ pathname: initialPathname, icon, label }: MenuModel) => {
  const pathname = usePathname()

  return (
    <ListItem
      component={Link}
      href={initialPathname}
      disablePadding
      className="px-[16px]"
    >
      <ListItemButton
        className="!rounded-xl"
        selected={pathname.startsWith(initialPathname)}
        sx={{
          "&.Mui-selected .MuiListItemText-primary": {
            fontWeight: "bold !important",
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit !important" }}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
}

export default MenuItem
