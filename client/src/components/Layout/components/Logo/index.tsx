import { Typography } from "@mui/material"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      fontFamily="Castoro"
      fontStyle="italic"
      flexGrow={1}
      href="/"
    >
      a Board
    </Typography>
  )
}

export default Logo
