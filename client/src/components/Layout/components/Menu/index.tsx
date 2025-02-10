import { List } from "@mui/material"
import React from "react"
import MenuItem from "../MenuItem"
import { MenuModel } from "../../types"

interface MenuProps {
  menu: MenuModel[]
}

const Menu = ({ menu }: MenuProps) => {
  return (
    <List>
      {menu.map((item, index) => (
        <MenuItem key={`${item.label}:${index}`} {...item} />
      ))}
    </List>
  )
}

export default Menu
