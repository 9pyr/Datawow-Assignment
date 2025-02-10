import React from "react"
import Link from "next/link"
import Logo from "../Logo"
import Menu from "../Menu"
import getCookie from "@/utils/getCookie"
import { AppBar, Button, Divider, Drawer, Toolbar } from "@mui/material"
import { DRAWER_DESKTOP_WIDTH } from "@/components/Layout/constants"
import { MenuModel } from "@/components/Layout/types"
import { isEmpty } from "lodash"

interface DesktopLayoutProps {
  menu: MenuModel[]
}

const DesktopLayout = ({ menu = [] }: DesktopLayoutProps) => {
  const username = getCookie("username")

  return (
    <Drawer
      sx={{
        width: DRAWER_DESKTOP_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_DESKTOP_WIDTH,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          bgcolor: "#BBC2C0",
          border: "none",
          color: "primary.dark",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Logo />
          {isEmpty(username) && (
            <Button LinkComponent={Link} href="/login">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Divider />
      <Menu menu={menu} />
    </Drawer>
  )
}

export default DesktopLayout
