import { CssBaseline, Toolbar } from "@mui/material"
import React from "react"
import useResponsive from "@/hooks/useResponsive"
import DesktopLayout from "./components/DesktopLayout"
import MobileLayout from "./components/MobileLayout"
import WriteIcon from "@/icons/Write"
import HomeIcon from "@/icons/Home"

const menu = [
  { label: "Home", icon: <HomeIcon />, pathname: "/feed" },
  { label: "Our Blog", icon: <WriteIcon />, pathname: "/blog" },
]

const Layout = ({ children }: React.PropsWithChildren) => {
  const { isLaptop } = useResponsive()
  return (
    <div className="flex">
      <CssBaseline />
      {isLaptop ? <MobileLayout menu={menu} /> : <DesktopLayout menu={menu} />}
      <main className="flex flex-col w-full">
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

export default Layout
