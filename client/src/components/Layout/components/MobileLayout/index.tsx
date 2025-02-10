import { DRAWER_MOBILE_WIDTH } from "@/components/Layout/constants"
import { MenuModel } from "@/components/Layout/types"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material"
import { useState } from "react"
import Logo from "../Logo"
import Menu from "../Menu"

interface MobileLayoutProps {
  menu: MenuModel[]
}

const MobileLayout = ({ menu = [] }: MobileLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Logo />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_MOBILE_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_MOBILE_WIDTH,
            boxSizing: "border-box",
          },
        }}
        PaperProps={{
          className: "rounded-l-xl",
          sx: {
            bgcolor: "primary.dark",
            color: "#fff",
          },
        }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
      >
        <Toolbar sx={{ px: "32px !important" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <ArrowForwardRoundedIcon />
          </IconButton>
        </Toolbar>
        <Menu menu={menu} />
      </Drawer>
    </>
  )
}

export default MobileLayout
